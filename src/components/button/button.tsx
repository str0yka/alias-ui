import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib';

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    React.ComponentProps<'button'> {}

export const buttonStyles = cva(
  [
    'flex cursor-pointer items-center justify-center rounded-2xl px-8 select-none h-15 typography-medium-16',
    'hover:opacity-80',
    'active:opacity-60',
    'disabled:bg-primary-100 disabled:text-primary-300 disabled:pointer-events-none'
  ],
  {
    variants: {
      variant: {
        primary: 'bg-purple-400 text-zinc-50',
        secondary: 'bg-primary-100 text-primary-950'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);

export const Button = forwardRef<React.ComponentRef<'button'>, ButtonProps>(
  ({ variant, type = 'button', className, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonStyles({ variant, className }))}
      {...props}
    />
  )
);
