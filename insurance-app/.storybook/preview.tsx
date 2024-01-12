import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';

import './preview.css';

const preview: Preview = {
  globalTypes: {},
  parameters: {
    darkMode: {
      defaultValue: false,
      current: 'light',
      darkClass: 'dark',
      classTarget: 'html',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    options: {
      storySort: {
        order: [
          'Getting Started',
          'Foundations',
          'Components',
          ['Avatar', 'Badge', 'Button', 'Input'],
          'Layout',
        ],
      },
    },
  },
  // decorators: [withGlobalStyle],
};

export default preview;
