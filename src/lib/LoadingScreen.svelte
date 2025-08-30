<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { fromEvent } from 'rxjs';
  import { debounceTime } from 'rxjs/operators';
  import resourceLoader from '../resource-loader.mjs';

  let loadingProgress = writable({});
  let allLoaded = writable(false);
  let progressContainer;
  let progressBarWidth = writable(30);

  const calculateProgressBarWidth = () => {
    if (!progressContainer) return 30;

    const testElement = document.createElement('span');
    testElement.style.visibility = 'hidden';
    testElement.style.position = 'absolute';
    testElement.style.whiteSpace = 'nowrap';
    testElement.textContent = '█'.repeat(10);

    const computedStyle = window.getComputedStyle(progressContainer);
    testElement.style.fontFamily = computedStyle.fontFamily;
    testElement.style.fontSize = computedStyle.fontSize;
    testElement.style.fontWeight = computedStyle.fontWeight;

    progressContainer.appendChild(testElement);
    const actualCharWidth = testElement.offsetWidth / 10;
    progressContainer.removeChild(testElement);

    const containerWidth = progressContainer.clientWidth;
    const reservedSpace = actualCharWidth * 10;
    const availableWidth = containerWidth - reservedSpace;
    const maxChars = Math.floor(availableWidth / actualCharWidth);

    return maxChars;
  };

  const updateProgressBarWidth = () => {
    const newWidth = calculateProgressBarWidth();
    if (newWidth !== $progressBarWidth) {
      progressBarWidth.set(newWidth);
    }
  };

  const getAsciiProgress = (progress) => {
    const width = $progressBarWidth;
    const filled = Math.round((progress / 100) * width);
    const empty = width - filled;
    return (
      '[' +
      '█'.repeat(filled) +
      '░'.repeat(empty) +
      '] ' +
      Math.round(progress) +
      '%'
    );
  };

  const progressListener = (progress) => {
    loadingProgress.set({ ...progress });
    if (resourceLoader.isAllLoaded()) {
      setTimeout(() => {
        allLoaded.set(true);
      }, 500);
    }
  };

  let resizeSubscription = null;

  onMount(async () => {
    resourceLoader.addProgressListener(progressListener);
    loadingProgress.set({ ...resourceLoader.loadingProgress });

    setTimeout(() => {
      updateProgressBarWidth();

      resizeSubscription = fromEvent(window, 'resize')
        .pipe(debounceTime(100))
        .subscribe(updateProgressBarWidth);
    }, 50);
  });

  onDestroy(() => {
    resourceLoader.removeProgressListener(progressListener);
    if (resizeSubscription) {
      resizeSubscription.unsubscribe();
    }
  });
</script>

{#if !$allLoaded}
  <div
    class="fixed inset-0 w-screen h-screen manual-bg-base flex justify-center items-center z-[9999] font-mono"
  >
    <div class="max-w-2xl w-[90%] text-center">
      <h2 class="text-2xl mb-8 manual-text-main">Loading Resources...</h2>
      <div class="flex flex-col gap-4 text-left">
        {#each Object.entries($loadingProgress) as [key, item]}
          <div class="manual-bg-surface p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="font-bold manual-text-main">{item.name}</span>
              <span class="opacity-80 manual-text-main">
                {item.error ? 'Error' : item.loaded ? 'Done' : 'Loading...'}
              </span>
            </div>
            <div
              bind:this={progressContainer}
              class="text-sm manual-text-main overflow-hidden"
            >
              {getAsciiProgress(item.progress)}
            </div>
            {#if item.error}
              <div class="text-red-400 mt-2">
                Error: {item.error}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .manual-bg-base {
    background: rgb(24, 24, 24);
  }

  .manual-bg-surface {
    background: rgb(31, 31, 31);
  }

  .manual-text-main {
    color: rgb(204, 204, 204);
  }
</style>