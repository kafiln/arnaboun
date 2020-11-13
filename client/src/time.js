export const MILLISECONDS_IN_ONE_DAY = 1000 * 60 * 60 * 24;

export const differeneInDays = (start, end) =>
  Math.floor(Math.abs(start - end) / MILLISECONDS_IN_ONE_DAY);
