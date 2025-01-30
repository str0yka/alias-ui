import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { MenuIcon } from '@/assets/icons';
import { IconButton } from '@/components';

describe('IconButton', () => {
  it('renders the icon button with default size', () => {
    render(
      <IconButton
        size='md'
        onClick={vi.fn()}
      >
        <MenuIcon />
      </IconButton>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toContainElement(screen.getByRole('img'));
  });

  it('applies the correct size class for "md"', () => {
    render(
      <IconButton
        size='md'
        onClick={vi.fn()}
      >
        <MenuIcon />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('size-[24px]');
  });

  it('applies the correct size class for "lg"', () => {
    render(
      <IconButton
        size='lg'
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
        size='md'
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
        size='md'
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
        size='md'
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
});
