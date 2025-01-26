import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib';

export type LinkMode = 'internal' | 'external';

export interface LinkProps extends React.ComponentProps<'a'> {
  mode?: LinkMode;
  disabled?: boolean;
}

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
      }
    }
  }
);

export const Link = forwardRef<React.ComponentRef<'a'>, LinkProps>(
  ({ mode = 'internal', className, disabled, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(linkStyles({ mode, className }), {
        'text-info-50/25 pointer-events-none': disabled
      })}
      {...props}
    />
  )
);
