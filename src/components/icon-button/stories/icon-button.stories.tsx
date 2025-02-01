import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MenuIcon } from '@/icons';

import { IconButton } from '../icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium']
    },
    disabled: {
      control: 'boolean'
    },
    onClick: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  name: 'Base',
  args: {
    size: 'medium',
    children: <MenuIcon size='sm' />,
    onClick: fn(),
    disabled: false
  }
};
