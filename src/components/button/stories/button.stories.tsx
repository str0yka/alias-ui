import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary']
    },
    disabled: {
      control: 'boolean'
    },
    onClick: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  },
  args: {
    children: 'кнопка',
    onClick: fn()
  }
} satisfies Meta<typeof Button>;

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
