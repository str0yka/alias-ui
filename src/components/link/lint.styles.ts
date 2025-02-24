import { cva } from 'class-variance-authority';

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
