import type { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib';

import { buttonStyles } from './button.styles';

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    React.ComponentProps<'button'> {}

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
