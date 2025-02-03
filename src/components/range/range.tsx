import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { clamp, cn, useEvent } from '@/lib';

import { THUMB_SIZE } from './range.constants';
import { calculateValue } from './range.helpers';

export interface RangeProps extends Omit<React.ComponentProps<'div'>, 'onChange'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const Range = forwardRef<React.ComponentRef<'div'>, RangeProps>(
  (
    {
      value: externalValue,
      min = 0,
      defaultValue = min,
      max = 100,
      step = 1,
      disabled,
      className,
      onChange,
      onTouchStart,
      onMouseDown,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);

    const touchedRef = useRef(false);
    const containerRef = useRef<React.ComponentRef<'div'>>(null);

    useImperativeHandle(ref, () => containerRef.current!);

    const value = calculateValue(externalValue ?? internalValue, { min, max, step });
    const percent = clamp(((value - min) / (max - min)) * 100, 0, 100);

    const handleChange = useEvent(
      ({ pageX, element }: { pageX: number; element: HTMLDivElement }) => {
        const calculated = calculateValue({ pageX, element }, { min, max, step });

        onChange?.(calculated);
        setInternalValue(calculated);
      }
    );

    useEffect(() => {
      const controller = new AbortController();

      document.addEventListener(
        'mousemove',
        (event) => {
          if (!containerRef.current || !touchedRef.current) return;

          handleChange({ pageX: event.pageX, element: containerRef.current });
        },
        {
          signal: controller.signal
        }
      );

      document.addEventListener(
        'touchmove',
        (event) => {
          if (!containerRef.current || !touchedRef.current) return;

          event.preventDefault();

          handleChange({ pageX: event.touches[0].pageX, element: containerRef.current });
        },
        {
          signal: controller.signal,
          passive: false
        }
      );

      document.addEventListener(
        'touchend',
        () => {
          touchedRef.current = false;
        },
        {
          signal: controller.signal
        }
      );

      document.addEventListener(
        'mouseup',
        () => {
          touchedRef.current = false;
        },
        {
          signal: controller.signal
        }
      );

      return () => {
        controller.abort();
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className={cn(
          'relative flex h-6 cursor-pointer items-center select-none',
          { 'pointer-events-none': disabled },
          className
        )}
        onTouchStart={(event) => {
          touchedRef.current = true;
          handleChange({ pageX: event.touches[0].pageX, element: event.currentTarget });
          onTouchStart?.(event);
        }}
        onMouseDown={(event) => {
          touchedRef.current = true;
          handleChange({ pageX: event.pageX, element: event.currentTarget });
          onMouseDown?.(event);
        }}
        {...props}
      >
        <div className='bg-primary-200 relative h-1 w-full overflow-hidden rounded-[1px]'>
          <div
            className={cn('h-full bg-purple-400', { 'bg-primary-300': disabled })}
            style={{ width: `${percent}%` }}
          />
        </div>
        <div
          className='absolute top-1/2 h-6 w-6 -translate-1/2 rounded-lg bg-zinc-50 shadow-lg'
          style={{
            left: `calc(${percent}% + ${THUMB_SIZE / 2 - THUMB_SIZE * (percent / 100)}px)`
          }}
        />
      </div>
    );
  }
);
