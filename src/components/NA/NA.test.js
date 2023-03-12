import { render, cleanup } from '@testing-library/react';

import NA from './NA';

afterEach(cleanup);

describe('NA', () => {
	it('should render correctly', () => {
		const { container } = render(<NA />);
		expect(container).toMatchSnapshot();
	});
});
