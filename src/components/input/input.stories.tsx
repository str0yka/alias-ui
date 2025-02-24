import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'плейсхолдер',
    disabled: false,
    invalid: false
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Invalid: Story = {
  args: {
    invalid: true
  }
};
