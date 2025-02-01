import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';

const meta = {
  title: 'Components/Switch',
  component: Switch
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  name: 'Basic'
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true
  }
};
