export const MILLISECONDS_IN_ONE_DAY = 1000 * 60 * 60 * 24;

export const DATE_FORMAT = 'dd/MM/yyyy';

export const differeneInDays = (start, end) =>
  Math.floor(Math.abs(start - end) / MILLISECONDS_IN_ONE_DAY);

export const formatDate = date => new Date(date).toLocaleDateString('fr-FR');
