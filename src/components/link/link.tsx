import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib';

export const linkStyles = cva(
  [
    'typography-regular-12 text-info-400 cursor-pointer select-none underline-offset-2',
    'hover:text-info-300',
    'active:text-info-300'
  ],
  {
    variants: {
      mode: {
        internal: 'active:underline',
        external: ['underline decoration-dashed', 'active:no-underline']
      },
      disabled: {
        false: null,
        true: 'text-info-50/25 pointer-events-none'
      }
    },
    defaultVariants: {
      mode: 'internal',
      disabled: false
    }
  }
);

export interface LinkProps extends VariantProps<typeof linkStyles>, React.ComponentProps<'a'> {}

export const Link = forwardRef<React.ComponentRef<'a'>, LinkProps>(
  ({ mode, className, disabled, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(linkStyles({ mode, disabled, className }))}
      {...props}
    />
  )
);
