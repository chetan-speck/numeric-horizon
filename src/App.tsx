// ------------------------------------------------------------------------------------------

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppRoutes from './constants/appRoutes';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';
import Public from './layouts/Public/Public';
import Home from './screens/Home/Home';
import Providers from './wrappers/Providers/Providers';

import type { FC, JSX } from 'react';

// ------------------------------------------------------------------------------------------

const App: FC = (): JSX.Element => {
	return (
		<Providers providers={[ThemeProvider]}>
			<BrowserRouter>
				<Routes>
					<Route element={<Public />}>
						<Route
							path={AppRoutes.HOME()}
							element={<Home />}
						/>
						<Route
							path={AppRoutes.ALL()}
							element={<Navigate to={AppRoutes.HOME()} />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Providers>
	);
};

// ------------------------------------------------------------------------------------------

export default App;

// ------------------------------------------------------------------------------------------
