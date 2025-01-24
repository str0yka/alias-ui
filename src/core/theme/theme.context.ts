import { createContext } from 'react';

import { THEME_DEFAULT } from './theme.constants';
import type { Theme } from './theme.types';

type ThemeGetterState = Theme;
type ThemeSetterState = React.Dispatch<React.SetStateAction<Theme>>;

export const ThemeGetterContext = createContext<ThemeGetterState>(THEME_DEFAULT);
export const ThemeSetterContext = createContext<ThemeSetterState>(() => {});
