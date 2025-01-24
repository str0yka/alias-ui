import { useState } from 'react';

import { THEME_DEFAULT } from './theme.constants';
import { ThemeGetterContext, ThemeSetterContext } from './theme.context';
import { Theme } from './theme.types';

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
