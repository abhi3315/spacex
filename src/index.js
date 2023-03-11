import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { CapsuleFilterProvider } from './contexts/capsule-filter';
import { ThemeProvider } from './contexts/theme';
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<CapsuleFilterProvider>
						<App />
					</CapsuleFilterProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
