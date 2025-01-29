import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

export type IconButtonProps = VariantProps<typeof iconButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: React.ReactNode;
  };

const iconButtonVariants = cva(
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

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size, className, ...otherProps }, ref) => {
    return (
      <button
        ref={ref}
        className={iconButtonVariants({ size, className })}
        {...otherProps}
      >
        {icon}
      </button>
    );
  }
);
