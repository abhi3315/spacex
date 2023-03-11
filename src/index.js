import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from './contexts/theme';
import { CapsuleFilterProvider } from './contexts/capsule-filter';
import App from './components/App';
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<CapsuleFilterProvider>
					<App />
				</CapsuleFilterProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>,
);
