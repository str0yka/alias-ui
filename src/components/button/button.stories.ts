import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './button';

const meta = {
  title: 'Components/Button/Sizes',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['medium', 'large']
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
    disabled: false,
    onClick: fn()
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  name: 'Medium',
  args: {
    size: 'medium'
  }
};

export const Large: Story = {
  name: 'Large',
  args: {
    size: 'large'
  }
};
