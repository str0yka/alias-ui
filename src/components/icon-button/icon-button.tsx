import type { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib';

import { iconButtonStyles } from './icon-button.styles';

export interface IconButtonProps
  extends VariantProps<typeof iconButtonStyles>,
    React.ComponentProps<'button'> {}

export const IconButton = forwardRef<React.ComponentRef<'button'>, IconButtonProps>(
  ({ size, type = 'button', className, children, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(iconButtonStyles({ size, className }))}
      {...props}
    >
      {children}
    </button>
  )
);
