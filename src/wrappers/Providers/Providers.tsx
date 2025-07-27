// ------------------------------------------------------------------------------------------

import type { FC, JSX, ReactElement, ReactNode } from 'react';
import type { GenericProvider } from './Providers.types';

// ------------------------------------------------------------------------------------------

interface Props {
	children: ReactNode;
	providers: GenericProvider[];
}

// ------------------------------------------------------------------------------------------

const Providers: FC<Props> = ({ children, providers }): JSX.Element => {
	return providers.reduceRight<ReactElement>(
		(acc, Provider) => <Provider>{acc}</Provider>,
		<>{children}</>,
	);
};

// ------------------------------------------------------------------------------------------

export default Providers;

// ------------------------------------------------------------------------------------------
