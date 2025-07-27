// ------------------------------------------------------------------------------------------

import { useEffect } from 'react';

import { BackspaceOutlined } from '@mui/icons-material';
import { Box, Button, Grid, useTheme as useMuiTheme } from '@mui/material';

import type { FC, JSX, ReactNode } from 'react';

// ------------------------------------------------------------------------------------------

interface Props {
	onKeyPress: (key: string) => void;
}

interface ButtonConfig {
	children: ReactNode;
	value: string;
	backgroundColor: string;
	color: string;
	size: number;
}

// ------------------------------------------------------------------------------------------

const Keyboard: FC<Props> = ({ onKeyPress }): JSX.Element => {
	const muiTheme = useMuiTheme();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const key = e.key;
			if (
				/^[0-9]$/.test(key) ||
				key === '+' ||
				key === '-' ||
				key === '*' ||
				key === '/' ||
				key === '%' ||
				key === '.'
			) {
				onKeyPress(key);
			} else if (key === '=' || key === 'Enter') {
				onKeyPress('=');
			} else if (key === 'Backspace') {
				onKeyPress('backspace');
			} else if (key === 'Delete') {
				onKeyPress('C');
			} else if (key.toLowerCase() === 'c') {
				onKeyPress('C');
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [onKeyPress]);

	const buttons: ButtonConfig[] = [
		{
			children: 'AC',
			value: 'C',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.error.main,
			size: 3,
		},
		{
			children: <BackspaceOutlined />,
			value: 'backspace',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.error.main,
			size: 3,
		},
		{
			children: '%',
			value: '%',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.primary.main,
			size: 3,
		},
		{
			children: '÷',
			value: '/',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.primary.main,
			size: 3,
		},
		{
			children: '7',
			value: '7',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '8',
			value: '8',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '9',
			value: '9',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '×',
			value: '*',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.primary.main,
			size: 3,
		},
		{
			children: '4',
			value: '4',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '5',
			value: '5',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '6',
			value: '6',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '−',
			value: '-',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.primary.main,
			size: 3,
		},
		{
			children: '1',
			value: '1',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '2',
			value: '2',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '3',
			value: '3',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '+',
			value: '+',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.primary.main,
			size: 3,
		},
		{
			children: '.',
			value: '.',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '0',
			value: '0',
			backgroundColor: muiTheme.palette.background.paper,
			color: muiTheme.palette.text.primary,
			size: 3,
		},
		{
			children: '=',
			value: '=',
			backgroundColor: muiTheme.palette.primary.main,
			color: muiTheme.palette.primary.contrastText,
			size: 6,
		},
	];

	return (
		<Box
			sx={() => ({
				height: '100%',
				px: { xs: 2, sm: 3 },
			})}
		>
			<Grid
				container
				spacing={1}
				sx={() => ({
					height: '100%',
				})}
			>
				{buttons.map(
					({ children, color, backgroundColor, size, value }, index) => {
						return (
							<Grid
								size={size}
								key={index}
							>
								<Button
									sx={() => ({
										borderRadius: '16px',
										height: '100%',
										width: '100%',
										backgroundColor: backgroundColor,
										color: color,
										fontSize: '22px',
									})}
									onClick={() => {
										if (navigator.vibrate) {
											navigator.vibrate(100);
										}
										onKeyPress(value);
									}}
								>
									{children}
								</Button>
							</Grid>
						);
					},
				)}
			</Grid>
		</Box>
	);
};

// ------------------------------------------------------------------------------------------

export default Keyboard;

// ------------------------------------------------------------------------------------------
