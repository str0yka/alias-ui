import { clamp, closestRound } from '@/lib';

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
    rounded = closestRound(value, Math.abs(step));
  } else {
    rounded = closestRound(
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
