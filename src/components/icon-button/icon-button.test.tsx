import { userEvent } from '@storybook/test';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { MenuIcon } from '@/icons';
import { getTestProps } from '@/lib';

import { IconButton } from './icon-button';

describe('IconButton Component', () => {
  it('should render the icon button with default size', () => {
    render(
      <IconButton>
        <MenuIcon {...getTestProps('menu-icon')} />
      </IconButton>
    );

    expect(screen.queryByRole('button')).toBeInTheDocument();
    expect(screen.queryByRole('button')).toContainElement(screen.queryByTestId('menu-icon'));
  });

  it('should apply the correct size class for "small"', () => {
    render(
      <IconButton size='small'>
        <MenuIcon />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('size-[24px]');
  });

  it('should apply the correct size class for "medium"', () => {
    render(
      <IconButton size='medium'>
        <MenuIcon />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('size-[32px]');
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
    );

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(
      <IconButton
        disabled
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
    );

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it('should render correctly with default props', () => {
    const { container } = render(<IconButton>Click me</IconButton>);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with small size', () => {
    const { container } = render(<IconButton size='small'>Click me</IconButton>);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with custom className', () => {
    const { container } = render(<IconButton className='bg-blue-500'>Click me</IconButton>);
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with disabled prop', () => {
    const { container } = render(<IconButton disabled>Click me</IconButton>);
    expect(container).toMatchSnapshot();
  });
});
