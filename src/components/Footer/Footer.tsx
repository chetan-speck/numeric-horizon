// ------------------------------------------------------------------------------------------

import { Link, Stack, Typography } from '@mui/material';

import type { FC, JSX } from 'react';

// ------------------------------------------------------------------------------------------

const Footer: FC = (): JSX.Element => {
	return (
		<Stack
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			component='header'
		>
			<Typography
				sx={() => ({
					py: { xs: 2 },
					px: { xs: 2, sm: 3 },
					textAlign: 'center',
					width: '100%',
				})}
				variant='body2'
			>
				Design & developed by{' '}
				<Link
					href='https://github.com/chetan-speck/'
					target='_blank'
					rel='noopener noreferrer'
					underline='hover'
				>
					Chetan Thosare
				</Link>
			</Typography>
		</Stack>
	);
};

// ------------------------------------------------------------------------------------------

export default Footer;

// ------------------------------------------------------------------------------------------
