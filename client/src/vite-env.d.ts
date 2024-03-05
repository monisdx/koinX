/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly COINGECKO_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
