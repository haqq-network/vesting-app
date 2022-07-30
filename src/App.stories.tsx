import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from './App';

export default {
  title: 'Vesting/App',
  component: App,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof App>;

export const Default: ComponentStory<typeof App> = () => <App />;
Default.args = {};
