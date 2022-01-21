/// <reference types="vite/client" />

declare interface Window {
  STORYBOOK_ENV?: string;
  __REDUX_DEVTOOLS_EXTENSION__?: {
    connect: () => {
      init: (state: unknown) => void;
      send: (name: string, state: unknown) => void;
    };
  };
}

interface ImportMetaEnv {
  readonly VITE_VERSION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
