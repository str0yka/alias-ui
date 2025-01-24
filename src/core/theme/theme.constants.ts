import { Theme } from './theme.types';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
} satisfies Record<string, Theme>;

export const THEME_DEFAULT: Theme = THEME.DARK;
