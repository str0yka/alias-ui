import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { IconButton } from '@/components';
import { MenuIcon } from '@/icons';

describe('IconButton', () => {
  it('renders the icon button with default size', () => {
    render(
      <IconButton
        size='medium'
        onClick={vi.fn()}
      >
        <MenuIcon data-testid='menu-icon' />
      </IconButton>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toContainElement(screen.getByTestId('menu-icon'));
  });

  it('applies the correct size class for "small"', () => {
    render(
      <IconButton
        size='small'
        onClick={vi.fn()}
      >
        <MenuIcon />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('size-[24px]');
  });

  it('applies the correct size class for "medium"', () => {
    render(
      <IconButton
        size='medium'
        onClick={vi.fn()}
      >
        <MenuIcon />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('size-[32px]');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(
      <IconButton
        size='medium'
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when "disabled" prop is passed', () => {
    render(
      <IconButton
        size='medium'
        disabled={true}
        onClick={vi.fn()}
      >
        <MenuIcon />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies the correct classes when disabled', () => {
    render(
      <IconButton
        size='medium'
        disabled={true}
        onClick={vi.fn()}
      >
        <MenuIcon />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('disabled:text-primary-950/25');
    expect(button).toHaveClass('disabled:pointer-events-none');
  });

  it('renders correctly with default props', () => {
    const { asFragment } = render(<IconButton>Click me</IconButton>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with small size', () => {
    const { asFragment } = render(<IconButton size='small'>Click me</IconButton>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with custom className', () => {
    const { asFragment } = render(<IconButton className='bg-blue-500'>Click me</IconButton>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with disabled prop', () => {
    const { asFragment } = render(<IconButton disabled>Click me</IconButton>);
    expect(asFragment()).toMatchSnapshot();
  });
});
