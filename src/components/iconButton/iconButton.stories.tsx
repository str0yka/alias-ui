import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MenuIcon } from '@/assets/icons';

import { IconButton } from './iconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['md', 'lg']
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

export const Primary: Story = {
  name: 'Primary',
  args: {
    size: 'md',
    children: <MenuIcon />,
    onClick: fn(),
    disabled: false
  }
};
