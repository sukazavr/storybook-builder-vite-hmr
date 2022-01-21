import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
  }),
  sidebar: {
    showRoots: true,
  },
  panelPosition: 'right',
  enableShortcuts: false,
});
