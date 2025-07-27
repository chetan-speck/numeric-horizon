// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import { useState } from 'react';

import { MoreVertOutlined } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';

import { useTheme } from '../../contexts/ThemeContext/ThemeContext';
import { Theme } from '../../contexts/ThemeContext/ThemeContext.types';

// ------------------------------------------------------------------------------------------

const Header: FC = (): JSX.Element => {
	const { theme, setTheme } = useTheme();
	const [menuAnchorElement, setMenuAnchorElement] =
		useState<HTMLElement | null>(null);

	const isMenuOpen = Boolean(menuAnchorElement);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setMenuAnchorElement(event.currentTarget);
	};
	const handleClose = () => {
		setMenuAnchorElement(null);
	};

	const handleToggleTheme = () => {
		setTheme(theme.palette.mode === 'light' ? Theme.DARK : Theme.LIGHT);
	};

	const menuOptions = [
		{
			label: 'Toggle theme',
			onClick: () => {
				handleToggleTheme();
				handleClose();
			},
		},
	];

	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{
				p: { xs: 2, sm: 3 },
			}}
			component='header'
		>
			<Typography
				sx={(theme) => ({
					color: theme.palette.text.primary,
					fontSize: '22px',
				})}
			>
				Numeric Horizon
			</Typography>
			<IconButton
				aria-label='more'
				aria-controls={isMenuOpen ? 'long-menu' : undefined}
				aria-expanded={isMenuOpen ? 'true' : undefined}
				aria-haspopup='true'
				onClick={handleClick}
				edge='end'
			>
				<MoreVertOutlined />
			</IconButton>
			<Menu
				anchorEl={menuAnchorElement}
				open={isMenuOpen}
				onClose={handleClose}
			>
				{menuOptions.map(({ label, onClick }, index) => (
					<MenuItem
						key={index}
						onClick={onClick}
					>
						{label}
					</MenuItem>
				))}
			</Menu>
		</Stack>
	);
};

// ------------------------------------------------------------------------------------------

export default Header;

// ------------------------------------------------------------------------------------------
