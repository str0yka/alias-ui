import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MenuIcon } from '@/icons';

import { IconButton } from '../icon-button';

import BaseStory from './icon-button.stories';

const meta: Meta<typeof IconButton> = {
  ...BaseStory,
  title: 'Components/IconButton/Sizes',

  argTypes: {
    disabled: { table: { disable: true } },
    size: { table: { disable: true } },
    children: { table: { disable: true } },
    type: { table: { disable: true } },
    onClick: { table: { disable: true } }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  name: 'Medium',
  args: {
    size: 'medium',
    children: <MenuIcon size='sm' />,
    onClick: fn(),
    disabled: false
  }
};

export const Small: Story = {
  name: 'Small',
  args: {
    size: 'small',
    children: <MenuIcon size='sm' />,
    onClick: fn(),
    disabled: false
  }
};
