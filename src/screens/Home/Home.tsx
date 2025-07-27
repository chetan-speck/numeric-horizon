// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import { useState } from 'react';

import { Box, Container } from '@mui/material';

import Display from '../../components/Display/Display';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Keyboard from '../../components/Keyboard/Keyboard';

// ------------------------------------------------------------------------------------------

const Home: FC = (): JSX.Element => {
	const [value, setValue] = useState<string>('0');
	const [valueAlt, setValueAlt] = useState<string>('');
	const [justEvaluated, setJustEvaluated] = useState<boolean>(false);

	const handleKeyPress = (key: string) => {
		if (!isNaN(Number(key))) {
			if (justEvaluated) {
				setValueAlt(value);
				setValue(key);
				setJustEvaluated(false);
			} else {
				setValue((prev) => (prev === '0' ? key : prev + key));
			}
		} else if (key === '.') {
			if (justEvaluated) {
				setValueAlt(value);
				setValue('0.');
				setJustEvaluated(false);
			} else {
				setValue((prev) => {
					if (prev.includes('.')) return prev;
					return prev + '.';
				});
			}
		} else if (['+', '-', '*', '/'].includes(key)) {
			if (justEvaluated) {
				setJustEvaluated(false);
				setValue((prev) => prev + key);
			} else {
				setValue((prev) => {
					if (['+', '-', '*', '/'].includes(prev.slice(-1))) {
						return prev.slice(0, -1) + key;
					}
					return prev + key;
				});
			}
		} else if (key === '%') {
			setValue((prev) => {
				const match = prev.match(/(\d+\.?\d*)$/);
				if (match) {
					const num = parseFloat(match[1]);
					return prev.replace(/(\d+\.?\d*)$/, (num / 100).toString());
				}
				return prev;
			});
		} else if (key === '=') {
			try {
				let equation = value
					.replace(/×/g, '*')
					.replace(/÷/g, '/')
					.replace(/−/g, '-');
				equation = equation.replace(/[\+\-\*\/]$/, '');
				const result = eval(equation);
				setValueAlt(
					value.replace(/\*/g, '×').replace(/\//g, '÷').replace(/-/g, '−') +
						' =',
				);
				setValue(result.toString());
				setJustEvaluated(true);
			} catch {
				setValue('Error');
				setJustEvaluated(true);
			}
		} else if (key === 'C') {
			setValue('0');
			setValueAlt('');
			setJustEvaluated(false);
		} else if (key === 'backspace') {
			setValue((prev) => {
				if (justEvaluated) {
					setValueAlt('');
					setJustEvaluated(false);
					return '0';
				}
				if (prev.length <= 1) return '0';
				return prev.slice(0, -1);
			});
		}
	};

	return (
		<Container
			maxWidth='sm'
			disableGutters
			sx={() => ({
				height: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'stretch',
			})}
		>
			<Box
				sx={() => ({
					height: '100dvh',
					maxHeight: '900px',
					display: 'flex',
					flexDirection: 'column',
					my: 'auto',
				})}
			>
				<Header />
				<Box
					component='main'
					sx={() => ({
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						minHeight: 0,
					})}
				>
					<Box
						sx={() => ({
							flexBasis: '40%',
							flexGrow: 0,
							flexShrink: 0,
							overflowY: 'auto',
							minHeight: 0,
						})}
					>
						<Display
							value={value
								.replace(/\*/g, '×')
								.replace(/\//g, '÷')
								.replace(/-/g, '−')}
							valueAlt={valueAlt}
						/>
					</Box>
					<Box
						sx={() => ({
							flexBasis: '60%',
							flexGrow: 1,
							flexShrink: 1,
							overflow: 'hidden',
							minHeight: 0,
						})}
					>
						<Keyboard onKeyPress={handleKeyPress} />
					</Box>
				</Box>
				<Footer />
			</Box>
		</Container>
	);
};

// ------------------------------------------------------------------------------------------

export default Home;

// ------------------------------------------------------------------------------------------
