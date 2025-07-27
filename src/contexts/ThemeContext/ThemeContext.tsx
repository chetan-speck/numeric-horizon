// ------------------------------------------------------------------------------------------

import { createContext, useContext, useEffect, useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { darkTheme, lightTheme } from '../../config/theme/theme';
import { Theme } from './ThemeContext.types';

import type { ReactNode } from 'react';
import type { ThemeContextType } from './ThemeContext.types';

// ------------------------------------------------------------------------------------------

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ------------------------------------------------------------------------------------------

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useState<Theme.LIGHT | Theme.DARK | null>(null);
	const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.DEFAULT);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handleSystemChange = (e: MediaQueryListEvent) => {
			const stored = localStorage.getItem('theme') as Theme | null;
			if (stored === Theme.DEFAULT) {
				const systemMode = e.matches ? Theme.DARK : Theme.LIGHT;
				setMode(systemMode);
				setCurrentTheme(Theme.DEFAULT);
			}
		};

		mediaQuery.addEventListener('change', handleSystemChange);

		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored === Theme.LIGHT || stored === Theme.DARK) {
			setMode(stored);
			setCurrentTheme(stored);
		} else {
			const systemTheme = mediaQuery.matches ? Theme.DARK : Theme.LIGHT;
			setMode(systemTheme);
			localStorage.setItem('theme', Theme.DEFAULT);
			setCurrentTheme(Theme.DEFAULT);
		}

		return () => mediaQuery.removeEventListener('change', handleSystemChange);
	}, []);

	const setTheme = (value: Theme) => {
		localStorage.setItem('theme', value);
		setCurrentTheme(value);

		if (value === Theme.LIGHT || value === Theme.DARK) {
			setMode(value);
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;
			const systemMode = prefersDark ? Theme.DARK : Theme.LIGHT;
			setMode(systemMode);
		}
	};

	const theme = mode === Theme.DARK ? darkTheme : lightTheme;

	useEffect(() => {
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta && theme?.palette?.background?.default) {
			meta.setAttribute('content', theme.palette.background.default);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ currentTheme, theme, setTheme }}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

// ------------------------------------------------------------------------------------------

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider');
	}
	return context;
};

// ------------------------------------------------------------------------------------------
