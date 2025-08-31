<script>
  import {
    BrowserMessageReader,
    BrowserMessageWriter,
  } from "vscode-languageclient/browser";

  import * as vscode from "vscode";
  import { normalize } from "pathe";

  import { usePreviewComponent } from "../typst-preview/preview.mts";

  let { reader, writer } = $props();

  let hookedElem = $state(null);
  let windowElem = $state(null);
  let outerElem = $state(null);

  async function runLSPCommand(command, args) {
    const request = {
      jsonrpc: "2.0",
      id: 1,
      method: "workspace/executeCommand",
      params: {
        command: command,
        arguments: args,
      },
    };
    await writer.write(request);
  }

  export async function initPreview(path) {
    const { initPreviewInner } = usePreviewComponent(
      reader,
      writer,
      { value: hookedElem },
      { value: windowElem },
      { value: outerElem }
    );

    runLSPCommand("tinymist.doStartPreview", [[path]]);
    await initPreviewInner();

    vscode.window.onDidChangeTextEditorSelection(async (e) => {
      if (e.kind != 2) {
        return;
      }
      await runLSPCommand("tinymist.scrollPreview", [
        "default_preview",
        {
          event: "panelScrollTo",
          filepath: normalize(e.textEditor.document.fileName),
          line: e.selections[0].active.line,
          character: e.selections[0].active.character,
        },
      ]);
    });
  }
</script>

<div id="preview" bind:this={windowElem}>
  <div id="typst-container-top"></div>
  <div id="typst-container-main" bind:this={outerElem}>
    <div id="typst-app" bind:this={hookedElem}></div>
  </div>
</div>

<style>
  #preview {
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: grab;
  }

  #typst-container-top {
    z-index: 1;
  }

  #typst-container-main {
    flex: 1;
    overflow-y: auto;
    overflow-x: auto;
    position: relative;
  }

  #typst-app {
    width: fit-content;
    margin: 0;
    transform-origin: 0 0;
    background-color: #2b2b2b;
  }

  #typst-app.invert-colors {
    filter: invert(0.933333) hue-rotate(180deg);
  }

  #typst-app.invert-colors :global(.typst-image) {
    filter: invert(0) hue-rotate(0deg);
    transition: filter 0.1s ease-in-out;
  }

  #typst-app.invert-colors :global(.typst-image):hover,
  #typst-app.invert-colors.normal-image :global(.typst-image) {
    filter: invert(1) hue-rotate(180deg);
  }

  :global(.typst-doc) {
    fill: #2b2b2b;
  }

  :global(.hide-scrollbar-x) {
    overflow-x: hidden;
  }

  :global(.hide-scrollbar-y) {
    overflow-y: hidden;
  }

  :global(.typst-text) {
    pointer-events: bounding-box;
    cursor: text;
  }
</style>