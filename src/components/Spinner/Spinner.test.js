import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
	it('should render correctly', () => {
		const { container } = render(<Spinner />);
		expect(container).toMatchSnapshot();
	});
});
