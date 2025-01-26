import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview, ReactRenderer } from '@storybook/react';
import React from 'react';

import { StoryProvider } from '../src/stories';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-theme'
    }),
    (Story) => (
      <StoryProvider>
        <Story />
      </StoryProvider>
    )
  ]
};

export default preview;
