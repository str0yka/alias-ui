import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button Component', () => {
  it('should render button with medium size by default', () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('h-8 typography-regular-14');
  });

  it('should render button with large size when size prop is large', () => {
    render(<Button size='large'>Click Me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('h-10 typography-medium-16');
  });

  it('should render button with custom className', () => {
    render(<Button className='custom-class'>Click Me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('custom-class');
  });
});
