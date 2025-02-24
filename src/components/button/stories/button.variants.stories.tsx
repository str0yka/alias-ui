import type { Meta, StoryObj } from '@storybook/react';

import ButtonStory from './button.stories';

const meta = {
  ...ButtonStory,
  title: 'Components/Button/Variants'
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Primary',
  args: {
    variant: 'primary'
  }
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary'
  }
};
