// Vite plugin entry point for tyraria
// This separates the server-side Vite plugin from client-side components
// to avoid importing virtual modules in Node.js environments

export { tyrariaVitePlugin as tyraria } from './src/lib/vite-plugin.js';