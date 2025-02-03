import { userEvent } from '@storybook/test';
import { fireEvent, render } from '@testing-library/react';

import { getTestProps } from '@/lib';

import { Range } from './range';

describe('Range Component', () => {
  it('should renders correctly with default props', () => {
    const screen = render(<Range {...getTestProps('range')} />);

    expect(screen.getByTestId('range')).toBeInTheDocument();
  });

  it('should match snapshots', () => {
    const defaultRange = render(<Range />);
    const disabledRange = render(<Range disabled />);
    const halfFilledRange = render(
      <Range
        min={0}
        max={100}
        defaultValue={50}
      />
    );

    expect(defaultRange.container).toMatchSnapshot();
    expect(disabledRange.container).toMatchSnapshot();
    expect(halfFilledRange.container).toMatchSnapshot();
  });

  it('should renders with custom className', () => {
    const screen = render(
      <Range
        className='custom-class'
        {...getTestProps('range')}
      />
    );

    expect(screen.getByTestId('range')).toHaveClass('custom-class');
  });

  it('should calls onChange when clicked', async () => {
    const handleChange = vitest.fn();

    const screen = render(
      <Range
        onChange={handleChange}
        {...getTestProps('range')}
      />
    );

    await userEvent.click(screen.getByTestId('range'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('should handles touch events', () => {
    const handleChange = vitest.fn();

    const screen = render(
      <Range
        onChange={handleChange}
        {...getTestProps('range')}
      />
    );

    fireEvent.touchStart(screen.getByTestId('range'), {
      touches: [{ pageX: 50 }]
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
