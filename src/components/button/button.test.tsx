import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button Component', () => {
  it('should render button with primary variant by default', () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('bg-fuchsia-400', 'text-zinc-50');
  });

  it('should render button with large size when size prop is large', () => {
    render(<Button variant='secondary'>Click Me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('bg-primary-100', 'text-primary-950');
  });

  it('should render button with custom className', () => {
    render(<Button className='custom-class'>Click Me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('custom-class');
  });
});
