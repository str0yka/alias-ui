export const clamp = (number: number, min: number, max: number) =>
  Math.max(min, Math.min(number, max));

export const round = (number: number, by: number) => Math.round(number / by) * by;
