import { userEvent } from '@storybook/test';
import { render } from '@testing-library/react';

import { getTestProps } from '@/lib';

import { Switch } from './switch';

describe('Switch Component', () => {
  it('should renders without crashing', () => {
    const screen = render(<Switch {...getTestProps('switch')} />);

    expect(screen.getByTestId('switch').closest('label')).toBeInTheDocument();
  });

  it('should match snapshots', () => {
    const screen = render(<Switch />);

    expect(screen.container).toMatchSnapshot();
  });

  it('should toggles checked state on click', async () => {
    const screen = render(<Switch {...getTestProps('switch')} />);
    const inputElement = screen.getByTestId('switch');
    const switchElement = inputElement.closest('label')!;

    expect(inputElement).not.toBeChecked();

    await userEvent.click(switchElement);
    expect(inputElement).toBeChecked();

    await userEvent.click(switchElement);
    expect(inputElement).not.toBeChecked();
  });

  it('should calls onChange handler when clicked', async () => {
    const handleChange = vitest.fn();

    const screen = render(
      <Switch
        onChange={handleChange}
        {...getTestProps('switch')}
      />
    );

    const switchElement = screen.getByTestId('switch').closest('label')!;

    await userEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledTimes(1);

    await userEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  it('should applies custom className', () => {
    const screen = render(
      <Switch
        className='custom-class'
        {...getTestProps('switch')}
      />
    );

    const switchElement = screen.getByTestId('switch').closest('label')!;

    expect(switchElement).toHaveClass('custom-class');
  });

  it('should does not toggle when disabled', async () => {
    const screen = render(
      <Switch
        disabled
        {...getTestProps('switch')}
      />
    );

    const switchElement = screen.getByTestId('switch').closest('label')!;

    await userEvent.click(switchElement);
    expect(switchElement).not.toBeChecked();
  });
});
