import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib';

export interface IconButtonProps
  extends VariantProps<typeof iconButtonStyles>,
    React.ComponentProps<'button'> {}

const iconButtonStyles = cva(
  [
    'flex justify-center items-center rounded-[7px] primary-950 cursor-pointer',
    'hover:bg-primary-900/5',
    'active:bg-primary-900/15',
    'disabled:text-primary-950/25 disabled:pointer-events-none'
  ],
  {
    variants: {
      size: {
        md: 'size-[24px]',
        lg: 'size-[32px]'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

export const IconButton = forwardRef<React.ComponentRef<'button'>, IconButtonProps>(
  ({ size, type = 'button', className, children, ...otherProps }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(iconButtonStyles({ size, className }))}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
