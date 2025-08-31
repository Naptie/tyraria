<script>
  import { fromEvent } from 'rxjs';
  import { debounceTime } from 'rxjs/operators';
  import resourceLoader from '../resource-loader.mjs';

  let loadingProgress = $state({});
  let allLoaded = $state(false);
  let progressContainer = $state([]);
  let progressBarWidth = $state(30);

  const calculateProgressBarWidth = () => {
    const container = progressContainer?.[0];
    if (!container) return 30;

    const testElement = document.createElement('span');
    testElement.style.visibility = 'hidden';
    testElement.style.position = 'absolute';
    testElement.style.whiteSpace = 'nowrap';
    testElement.textContent = '█'.repeat(10);

    const computedStyle = window.getComputedStyle(container);
    testElement.style.fontFamily = computedStyle.fontFamily;
    testElement.style.fontSize = computedStyle.fontSize;
    testElement.style.fontWeight = computedStyle.fontWeight;

    container.appendChild(testElement);
    const actualCharWidth = testElement.offsetWidth / 10;
    container.removeChild(testElement);

    const containerWidth = container.clientWidth;
    const reservedSpace = actualCharWidth * 10;
    const availableWidth = containerWidth - reservedSpace;
    const maxChars = Math.floor(availableWidth / actualCharWidth);

    return maxChars;
  };

  const updateProgressBarWidth = () => {
    const newWidth = calculateProgressBarWidth();
    if (newWidth !== progressBarWidth) {
      progressBarWidth = newWidth;
    }
  };

  const getAsciiProgress = (progress) => {
    const width = progressBarWidth;
    const filled = Math.round((progress / 100) * width);
    const empty = width - filled;
    return '[' + '█'.repeat(filled) + '░'.repeat(empty) + '] ' + Math.round(progress) + '%';
  };

  const progressListener = (progress) => {
    loadingProgress = { ...progress };
    if (resourceLoader.isAllLoaded()) {
      setTimeout(() => {
        allLoaded = true;
      }, 500);
    }
  };

  let resizeSubscription = null;

  $effect(() => {
    resourceLoader.addProgressListener(progressListener);
    loadingProgress = { ...resourceLoader.loadingProgress };

    setTimeout(() => {
      updateProgressBarWidth();

      resizeSubscription = fromEvent(window, 'resize')
        .pipe(debounceTime(100))
        .subscribe(updateProgressBarWidth);
    }, 50);

    return () => {
      resourceLoader.removeProgressListener(progressListener);
      if (resizeSubscription) {
        resizeSubscription.unsubscribe();
      }
    };
  });
</script>

{#if !allLoaded}
  <div
    class="manual-bg-base fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center font-mono"
  >
    <div class="w-[90%] max-w-2xl text-center">
      <h2 class="manual-text-main mb-8 text-2xl">Loading Resources...</h2>
      <div class="flex flex-col gap-4 text-left">
        {#each Object.entries(loadingProgress) as [key, item] (key)}
          <div class="manual-bg-surface p-4">
            <div class="mb-2 flex items-center justify-between">
              <span class="manual-text-main font-bold">{item.name}</span>
              <span class="manual-text-main opacity-80">
                {item.error ? 'Error' : item.loaded ? 'Done' : 'Loading...'}
              </span>
            </div>
            <div bind:this={progressContainer[0]} class="manual-text-main overflow-hidden text-sm">
              {getAsciiProgress(item.progress)}
            </div>
            {#if item.error}
              <div class="mt-2 text-red-400">
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
