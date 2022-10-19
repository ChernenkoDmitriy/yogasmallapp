import React, { FC } from 'react';
import { RootNavigator } from './navigation/rootNavigator';
import { UIProvider } from './UIProvider';

export const App: FC = () => {

	return (
		<UIProvider>
			<RootNavigator />
		</UIProvider>
	);
}
