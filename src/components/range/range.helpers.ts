import { clamp, round } from '@/lib';

interface CalculateValue {
  (
    value: { pageX: number; element: HTMLDivElement },
    params: { min: number; max: number; step: number }
  ): number;
  (value: number, params: { min: number; max: number; step: number }): number;
}

export const calculateValue: CalculateValue = (value, { max, min, step }) => {
  let rounded;
  if (typeof value === 'number') {
    rounded = round(value, Math.abs(step));
  } else {
    rounded = round(
      ((value.pageX - value.element.offsetLeft) / value.element.clientWidth) *
        100 *
        ((max - min) / 100) +
        min,
      Math.abs(step)
    );
  }

  const clamped = clamp(rounded, min, max);

  return clamped;
};

export const calculatePercent = (
  value: number,
  {
    min,
    max
  }: {
    min: number;
    max: number;
  }
) => clamp(((value - min) / (max - min)) * 100, 0, 100);
