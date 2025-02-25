import type { Meta, StoryObj } from '@storybook/react';

import type { IconButton } from '../icon-button';

import BaseStory from './icon-button.stories';

const meta: Meta<typeof IconButton> = {
  ...BaseStory,
  title: 'Components/IconButton/Sizes',

  argTypes: {
    disabled: { table: { disable: true } },
    size: { table: { disable: true } }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  name: 'Medium'
};

export const Small: Story = {
  name: 'Small',
  args: {
    size: 'small'
  }
};
