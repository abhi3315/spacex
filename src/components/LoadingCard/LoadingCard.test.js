import { render, cleanup } from '@testing-library/react';

import LoadingCard from './LoadingCard';

afterEach(cleanup);

describe('LoadingCard', () => {
	it('should render correctly', () => {
		const { container } = render(<LoadingCard />);
		expect(container).toMatchSnapshot();
	});
});
