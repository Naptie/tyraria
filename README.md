# tyraria

This is `tyraria`, a project that attempts to recreate the online editing experience of [typst.app]("https://typst.app/") based on [tinymist]("https://github.com/myriad-dreamin/tinymist") and [typst.ts]("https://github.com/Myriad-Dreamin/typst.ts").

Try it now: https://tyraria.typs.town/

> [!NOTE]
> It takes time to load fonts on your first visit.

## Usage

### As a Vite Plugin

Tyraria provides a Vite plugin for handling virtual modules for fonts and workspace files. Import it from the separate entry point to avoid client-side code execution:

```js
// vite.config.js
import { tyraria } from 'tyraria/vite'

export default defineConfig({
  plugins: [
    tyraria({
      fonts: {
        dir: 'src/assets/fonts',           // Directory containing font files
        urls: ['https://example.com/font.woff2'] // Optional: remote font URLs
      },
      workspace: {
        dir: 'src/assets/default-workspace' // Directory containing default workspace files
      }
    })
  ]
})
```

This provides virtual modules:
- `virtual:fonts` - Array of font files with `getData()` method
- `virtual:default-workspace` - Array of workspace files with `getData()` method

### As Svelte Components

```js
import { TyrariaEditor, TypstPreview, LoadingScreen } from 'tyraria'
```

## Current Status:

- [x] Monaco Editor basic editing functionality
- [x] tinymist LSP language service
- [x] typst-preview preview functionality
- [x] typst-preview componentization
- [ ] Load fonts from workspace
- [ ] Optimize startup speed
- [ ] Clean up redundant logs
- [ ] Eliminate tinymist compilation warnings
- [ ] Merge changes into tinymist mainline
- [ ] Automated build
- [x] Save workspace to pastebin and load workspace from pastebin
- [ ] Multi-user editing

## Build

### Build Tinymist WASM

```sh
git clone -b tinymist-wasm https://github.com/ParaN3xus/tinymist.git
cd tinymist/crates/tinymist
yarn
yarn build
cd pkg
yarn link
```

### Build tyraria

```sh
git clone https://github.com/ParaN3xus/tyraria/
cd tyraria
yarn
yarn link tinymist
yarn build
```

## License

This project is licensed under GPLv3.
