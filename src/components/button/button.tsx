import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

export type ButtonSize = 'medium' | 'large';

export interface ButtonProps extends React.ComponentProps<'button'> {
  size?: ButtonSize;
}

const button = cva(
  [
    'bg-primary-950 text-primary-50 flex cursor-pointer items-center justify-center rounded-lg px-4 select-none',
    'hover:opacity-80',
    'active:opacity-60',
    'disabled:bg-primary-950/80 disabled:text-primary-600 disabled:pointer-events-none'
  ],
  {
    variants: {
      size: {
        medium: 'h-8 typography-regular-14',
        large: 'h-10 typography-medium-16'
      }
    }
  }
);

export const Button = forwardRef<React.ComponentRef<'button'>, ButtonProps>(
  ({ size = 'medium', type = 'button', className, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={button({ size, className })}
      {...props}
    />
  )
);
