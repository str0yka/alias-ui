import { render, renderHook } from '@testing-library/react';
import { useRef } from 'react';

import { Input } from './input';

describe('Input Component', () => {
  it('should match snapshot', () => {
    const screen = render(<Input />);

    expect(screen.container).toMatchSnapshot();
  });

  it('should accept className and apply it to input', () => {
    const screen = render(<Input className='custom-class' />);

    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });

  it('should display invalid state', () => {
    const screen = render(<Input invalid />);

    expect(screen.container.querySelector('label')).toHaveAttribute('aria-invalid', 'true');
  });

  it('should display disabled state', () => {
    const screen = render(<Input disabled />);

    const input = screen.getByRole('textbox');

    expect(input).toBeDisabled();
    expect(input.closest('label')).toHaveAttribute('aria-disabled', 'true');
  });

  it('should forward ref to input', () => {
    const { result } = renderHook(() => useRef<HTMLInputElement>(null));

    render(<Input ref={result.current} />);

    expect(result.current.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should forward placeholder', () => {
    const screen = render(<Input placeholder='Введите текст' />);
    expect(screen.getByPlaceholderText('Введите текст')).toBeInTheDocument();
  });
});
