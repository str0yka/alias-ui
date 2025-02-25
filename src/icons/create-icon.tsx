import { cloneElement, forwardRef } from 'react';

interface Size {
  width: number | string;
  height: number | string;
}

type DefaultSizes = Record<string, Size>;

const defaultSizes = {
  medium: { width: 16, height: 16 },
  large: { width: 24, height: 24 }
};

interface CreateIconProps<Sizes extends DefaultSizes = typeof defaultSizes>
  extends React.ComponentProps<'svg'> {
  sizes?: Sizes;
}

export const createIcon = <Sizes extends DefaultSizes = typeof defaultSizes>(
  Element: React.ReactElement,
  defaultProps: CreateIconProps<Sizes> = {}
) => {
  const { sizes, ...props } = defaultProps;
  const mergedSizes = { ...defaultSizes, ...sizes };

  type IconSizes = keyof Sizes | keyof typeof defaultSizes;

  return forwardRef<React.ComponentRef<'svg'>, React.ComponentProps<'svg'> & { size?: IconSizes }>(
    (iconProps, ref) => {
      const { size = 'medium', ...otherIconProps } = iconProps;
      const { width, height } = mergedSizes[size as keyof typeof defaultSizes];

      return cloneElement(Element, {
        width,
        height,
        ref,
        ...props,
        ...otherIconProps
      });
    }
  );
};
