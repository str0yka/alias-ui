import type { VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/lib';

import { linkStyles } from './lint.styles';

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
