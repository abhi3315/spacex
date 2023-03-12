import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';

afterEach(cleanup);

describe('NotFound', () => {
	it('should render correctly', () => {
		const { container } = render(<NotFound />, {
			wrapper: BrowserRouter,
		});
		expect(container).toMatchSnapshot();
	});
});
