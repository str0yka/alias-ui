import { useState } from 'react';

import '@/tailwind.css';

import { THEME_DEFAULT } from './theme.constants';
import { ThemeGetterContext, ThemeSetterContext } from './theme.context';
import type { Theme } from './theme.types';

export interface ThemeProviderProps {
  theme?: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = ({
  theme: defaultTheme = THEME_DEFAULT,
  children
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeGetterContext.Provider value={theme}>
      <ThemeSetterContext.Provider value={setTheme}>{children}</ThemeSetterContext.Provider>
    </ThemeGetterContext.Provider>
  );
};
