// ------------------------------------------------------------------------------------------

import { alpha, createTheme } from '@mui/material/styles';

import type { ThemeOptions } from '@mui/material/styles';

// ------------------------------------------------------------------------------------------

const baseTheme: ThemeOptions = {
	components: {
		MuiCssBaseline: {
			styleOverrides: (theme) => ({
				body: {
					'*::-webkit-scrollbar': {
						width: '4px',
						height: '4px',
					},
					'*::-webkit-scrollbar-thumb': {
						backgroundColor: theme.palette.divider,
						borderRadius: '0',
					},
					'*::-webkit-scrollbar-track': {
						backgroundColor: 'transparent',
					},
					'&::selection': {
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
					},
				},
			}),
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'unset',
					boxShadow: 'none !important',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.palette.background.paper,
					backgroundImage: 'none',
				}),
			},
		},
		MuiSnackbarContent: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: '24px',
					backgroundColor: theme.palette.background.paper,
					color: theme.palette.text.primary,
					boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.1)}`,
				}),
			},
		},
	},
};

// ------------------------------------------------------------------------------------------

export const lightTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'light',
		primary: {
			main: '#370872',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#66577f',
			contrastText: '#ffffff',
		},
		error: {
			main: '#ba1a1a',
			contrastText: '#ffffff',
		},
		background: {
			default: '#f3ebf5',
			paper: '#fef7ff',
		},
		text: {
			primary: '#1d1a21',
			secondary: '#4a4451',
			disabled: '#1d1a211f',
		},
		divider: '#ccc3d3',
		surface: {
			lowest: '#ffffff',
			low: '#f9f1fa',
			medium: '#f3ebf5',
			high: '#ede6ef',
			highest: '#e7e0e9',
		},
	},
});

// ------------------------------------------------------------------------------------------

export const darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'dark',
		primary: {
			main: '#d5bbff',
			contrastText: '#3f157a',
		},
		secondary: {
			main: '#d1bfec',
			contrastText: '#372a4e',
		},
		error: {
			main: '#ffb4ab',
			contrastText: '#690005',
		},
		background: {
			default: '#151218',
			paper: '#211e25',
		},
		text: {
			primary: '#e7e0e9',
			secondary: '#ccc3d3',
			disabled: '#e7e0e91f',
		},
		divider: '#4a4451',
		surface: {
			lowest: '#100d13',
			low: '#1d1a21',
			medium: '#211e25',
			high: '#2c292f',
			highest: '#37333a',
		},
	},
});

// ------------------------------------------------------------------------------------------
