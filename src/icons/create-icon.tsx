import { cloneElement, forwardRef } from 'react';

type SizeType = { width: number | string; height: number | string };
type SizesType = Record<string, SizeType>;

const defaultSizes = {
  xs: { width: 12, height: 12 },
  sm: { width: 16, height: 16 },
  md: { width: 24, height: 24 },
  lg: { width: 32, height: 32 },
  xl: { width: 48, height: 48 }
};

interface CreateIconOptions<T extends SizesType = typeof defaultSizes>
  extends Omit<React.ComponentProps<'svg'>, 'path'> {
  sizes?: T;
}

export const createIcon = <T extends SizesType = typeof defaultSizes>(
  Element: JSX.Element,
  options?: CreateIconOptions<T>
) => {
  const { sizes, ...createProps } = options || {};
  const mergedSizes = { ...defaultSizes, ...sizes };

  type IconSizes = keyof T | keyof typeof defaultSizes;

  return forwardRef<React.ComponentRef<'svg'>, React.ComponentProps<'svg'> & { size?: IconSizes }>(
    (iconProps, ref) => {
      const { size = 'md', ...otherIconProps } = iconProps;
      const finalSize = mergedSizes[size as keyof typeof defaultSizes];

      return cloneElement(Element, {
        width: finalSize.width,
        height: finalSize.height,
        ref,
        ...createProps,
        ...otherIconProps
      });
    }
  );
};
