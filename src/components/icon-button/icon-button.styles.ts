import { cva } from 'class-variance-authority';

export const iconButtonStyles = cva(
  [
    'flex justify-center items-center rounded-[7px] primary-950 cursor-pointer',
    'hover:bg-primary-900/5',
    'active:bg-primary-900/15',
    'disabled:text-primary-950/25 disabled:pointer-events-none'
  ],
  {
    variants: {
      size: {
        small: 'size-[24px]',
        medium: 'size-[32px]'
      }
    },
    defaultVariants: {
      size: 'medium'
    }
  }
);
