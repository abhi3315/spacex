import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import CapsuleModal from './CapsuleModal';

afterEach(cleanup);

const capsuleData = {
	reuse_count: 0,
	water_landings: 1,
	land_landings: 0,
	last_update: 'Hanging in atrium at SpaceX HQ in Hawthorne ',
	launches: ['5eb87cdeffd86e000604b330'],
	serial: 'C101',
	status: 'retired',
	type: 'Dragon 1.0',
	id: '5e9e2c5bf35918ed873b2664',
};

describe('CapsuleModal', () => {
	it('should render correctly', () => {
		const { container } = render(
			<QueryClientProvider client={new QueryClient()}>
				<CapsuleModal id={capsuleData.id} isOpen />
			</QueryClientProvider>,
		);
		expect(container).toMatchSnapshot();
	});
});
