// ------------------------------------------------------------------------------------------

import { darkTheme, lightTheme } from '../../config/theme/theme';

// ------------------------------------------------------------------------------------------

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	DEFAULT = 'default',
}

export interface ThemeContextType {
	currentTheme: Theme;
	theme: typeof lightTheme | typeof darkTheme;
	setTheme: (value: Theme) => void;
}

// ------------------------------------------------------------------------------------------
