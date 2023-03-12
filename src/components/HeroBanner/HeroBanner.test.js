import { render, cleanup } from '@testing-library/react';

import HeroBanner from './HeroBanner';

afterEach(cleanup);

describe('HeroBanner', () => {
	it('should render correctly', () => {
		const { container } = render(<HeroBanner />);
		expect(container).toMatchSnapshot();
	});
});
