module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        viewport: false,
        docs: false,
      },
    },
  ],
  viteFinal: async (config) => {
    return {
      ...config,
      envDir: './env',
      // TODO: get it from env using dev mode
      define: {
        'import.meta.env.VITE_VERSION': JSON.stringify('dev'),
      },
    };
  },
  logLevel: 'debug',
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: 'storybook-builder-vite',
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
};
