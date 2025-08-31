<script>
  import { BrowserMessageReader, BrowserMessageWriter } from 'vscode-languageclient/browser';

  import * as vscode from 'vscode';
  import { normalize } from 'pathe';

  import { usePreviewComponent } from '../typst-preview/preview.mts';

  let { reader, writer } = $props();

  let hookedElem = $state(null);
  let windowElem = $state(null);
  let outerElem = $state(null);

  async function runLSPCommand(command, args) {
    const request = {
      jsonrpc: '2.0',
      id: 1,
      method: 'workspace/executeCommand',
      params: {
        command: command,
        arguments: args
      }
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

    runLSPCommand('tinymist.doStartPreview', [[path]]);
    await initPreviewInner();

    vscode.window.onDidChangeTextEditorSelection(async (e) => {
      if (e.kind != 2) {
        return;
      }
      await runLSPCommand('tinymist.scrollPreview', [
        'default_preview',
        {
          event: 'panelScrollTo',
          filepath: normalize(e.textEditor.document.fileName),
          line: e.selections[0].active.line,
          character: e.selections[0].active.character
        }
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
