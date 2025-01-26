import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';

const meta = {
  title: 'Components/Link/Modes',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    disabled: false
  }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Internal: Story = {
  name: 'Internal',
  args: {
    mode: 'internal',
    children: 'внутренняя ссылка'
  }
};

export const External: Story = {
  name: 'External',
  args: {
    mode: 'external',
    children: 'внешняя ссылка'
  }
};
