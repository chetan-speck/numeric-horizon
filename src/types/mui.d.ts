// ------------------------------------------------------------------------------------------

import '@mui/material/styles';

// ------------------------------------------------------------------------------------------

declare module '@mui/material/styles' {
	interface Palette {
		surface: {
			lowest: string;
			low: string;
			medium: string;
			high: string;
			highest: string;
		};
	}
	interface PaletteOptions {
		surface?: {
			lowest: string;
			low: string;
			medium: string;
			high: string;
			highest: string;
		};
	}
}

// ------------------------------------------------------------------------------------------
