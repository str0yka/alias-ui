import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import type { RangeProps } from './range';
import { Range } from './range';

const Render = (props: RangeProps) => (
  <div className='w-50'>
    <Range {...props} />
  </div>
);

const meta = {
  title: 'Components/Range',
  component: Range,
  render: Render,
  argTypes: {
    defaultValue: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 20,
    disabled: false,
    onChange: fn()
  }
} satisfies Meta<typeof Range>;

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
