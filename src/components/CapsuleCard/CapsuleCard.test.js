import { cleanup, render } from '@testing-library/react';

import CapsuleCard from './CapsuleCard';

afterEach(cleanup);

const capsule = {
	reuse_count: 2,
	water_landings: 3,
	land_landings: 0,
	last_update:
		'As of August 29, 2019: Arrived at Port of LA after splashdown following CRS-18 mission',
	launches: ['5eb87cecffd86e000604b33f', '5eb87d0effd86e000604b35c', '5eb87d36ffd86e000604b37b'],
	serial: 'C108',
	status: 'active',
	type: 'Dragon 1.1',
	id: '5e9e2c5cf359188bfb3b266b',
};

describe('CapsuleCard', () => {
	it('should render correctly', () => {
		const { container } = render(<CapsuleCard />);
		expect(container).toMatchSnapshot();
	});

	it('should render correctly with data', () => {
		const { container } = render(<CapsuleCard capsule={capsule} />);
		expect(container).toMatchSnapshot();
	});
});
