/// <reference types="vite/client" />

declare module '*.mjs?worker&url' {
  const src: string;
  export default src;
}

declare module '*.js?worker&url' {
  const src: string;
  export default src;
}

declare module '*.ts?worker&url' {
  const src: string;
  export default src;
}
