import clsx from 'clsx';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {}

export const Button = forwardRef<React.ComponentRef<'button'>, ButtonProps>(
  ({ type = 'button', className, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        'bg-primary-950 text-primary-50 flex h-8 cursor-pointer items-center justify-center rounded-lg px-2 py-4',
        'disabled:pointer-events-none',
        className
      )}
      {...props}
    />
  )
);
