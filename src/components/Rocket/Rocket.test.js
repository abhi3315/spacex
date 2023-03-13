import { cleanup, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { useGetRocket } from '../../hooks/rocket';
import Rocket from './Rocket';

jest.mock('../../hooks/rocket');

describe('Rocket', () => {
	beforeEach(() => {
		useGetRocket.mockImplementation(() => ({ isLoading: true }));
	});

	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('renders without crashing', () => {
		const { container } = render(
			<QueryClientProvider client={new QueryClient()}>
				<Rocket />
			</QueryClientProvider>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should display loading indicator', () => {
		const { getByText } = render(
			<QueryClientProvider client={new QueryClient()}>
				<Rocket />
			</QueryClientProvider>,
		);
		expect(getByText('Loading...')).toBeInTheDocument();
	});

	it('should fetch the rocket info', async () => {
		render(
			<MemoryRouter initialEntries={['/rockets/5e9d0d95eda69955f709d1eb']}>
				<QueryClientProvider client={new QueryClient()}>
					<Routes>
						<Route path='/rockets/:id' element={<Rocket />} />
					</Routes>
				</QueryClientProvider>
			</MemoryRouter>,
		);

		expect(useGetRocket).toHaveBeenCalledWith('5e9d0d95eda69955f709d1eb');
	});
});
