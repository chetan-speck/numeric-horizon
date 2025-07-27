// ------------------------------------------------------------------------------------------

import { useEffect, useRef } from 'react';

import { alpha, Stack, Typography } from '@mui/material';

import type { FC, JSX } from 'react';

// ------------------------------------------------------------------------------------------

interface Props {
	value: string;
	valueAlt: string;
}

// ------------------------------------------------------------------------------------------

const Display: FC<Props> = ({ value, valueAlt }): JSX.Element => {
	const stackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (stackRef.current) {
			stackRef.current.scrollTop = stackRef.current.scrollHeight + 24;
		}
	}, [value, valueAlt]);

	return (
		<Stack
			ref={stackRef}
			sx={() => ({
				minHeight: '100%',
				p: { xs: 2, sm: 3 },
				overflowY: 'auto',
			})}
			alignItems='end'
			justifyContent='end'
		>
			<Typography
				component='p'
				textAlign='end'
				sx={(theme) => ({
					fontSize: '16px',
					color: alpha(theme.palette.text.primary, 0.5),
					overflowWrap: 'break-word',
					wordBreak: 'break-all',
					whiteSpace: 'pre-wrap',
				})}
			>
				{valueAlt}
			</Typography>
			<Typography
				component='p'
				textAlign='end'
				sx={(theme) => ({
					width: '100%',
					fontSize: '38px',
					color: theme.palette.text.primary,
					fontWeight: '500',
					overflowWrap: 'break-word',
					wordBreak: 'break-all',
					whiteSpace: 'pre-wrap',
				})}
			>
				{value}
			</Typography>
		</Stack>
	);
};

// ------------------------------------------------------------------------------------------

export default Display;

// ------------------------------------------------------------------------------------------
