import { forwardRef } from 'react';

import { cn } from '@/lib';

interface SwitchProps extends Omit<React.ComponentProps<'input'>, 'type'> {}

export const Switch = forwardRef<React.ComponentRef<'input'>, SwitchProps>(
  ({ className, ...props }, ref) => (
    <label className={cn('inline-flex items-center', className)}>
      <input
        ref={ref}
        type='checkbox'
        value=''
        className='peer sr-only'
        {...props}
      />
      <div
        className={cn(
          'peer bg-primary-200 relative h-6 w-10 cursor-pointer rounded-lg',
          'peer-checked:bg-purple-400',
          'peer-disabled:bg-primary-100 peer-disabled:border-primary-200 peer-disabled:cursor-default peer-disabled:border',
          "after:bg-primary-50 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-md after:transition-transform after:content-['']",
          'peer-checked:after:translate-x-[calc(100%-4px)]',
          'peer-disabled:after:bg-primary-200 peer-disabled:after:start-[1px] peer-disabled:after:top-[1px]',
          'rtl:peer-checked:after:-translate-x-full'
        )}
      />
    </label>
  )
);
