import { forwardRef } from 'react';

import { cn } from '@/lib';

interface InputProps extends React.ComponentProps<'input'> {
  invalid?: boolean;
  startSlot?: React.ReactNode;
  endSlot?: React.ReactNode;
  containerProps?: React.ComponentProps<'label'>;
}

export const Input = forwardRef<React.ComponentRef<'input'>, InputProps>(
  ({ startSlot, endSlot, invalid, disabled, className, containerProps, ...props }, ref) => (
    <label
      {...containerProps}
      className={cn(
        'bg-primary-100 typography-medium-16 text-primary-950 border-primary-200 flex h-15 cursor-text items-center gap-1.5 rounded-2xl border-2 px-3 select-none',
        'focus-within:border-fuchsia-400 focus-within:shadow-lg focus-within:shadow-fuchsia-500/25',
        'aria-disabled:bg-primary-200 aria-disabled:border-primary-300 aria-disabled:pointer-events-none',
        'aria-invalid:border-rose-400 aria-invalid:shadow-rose-500/25',
        containerProps?.className
      )}
      aria-invalid={invalid}
      aria-disabled={disabled}
    >
      {startSlot}
      <input
        ref={ref}
        className={cn('placeholder:text-primary-400 grow outline-none', className)}
        disabled={disabled}
        {...props}
      />
      {endSlot}
    </label>
  )
);
