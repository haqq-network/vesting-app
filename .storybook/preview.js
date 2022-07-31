import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      string: /(ReactNode|ReactText)$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
