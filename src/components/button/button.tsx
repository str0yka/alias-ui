import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib';

export const buttonStyles = cva(
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
    },
    defaultVariants: {
      size: 'medium'
    }
  }
);

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    React.ComponentProps<'button'> {}

export const Button = forwardRef<React.ComponentRef<'button'>, ButtonProps>(
  ({ size, type = 'button', className, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonStyles({ size, className }))}
      {...props}
    />
  )
);
