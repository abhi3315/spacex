import { cleanup, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';

import CapsuleFilterContext from '../../contexts/capsule-filter';
import { useGetCapsules } from '../../hooks/capsule';

import CapsuleList from './CapsuleList';

jest.mock('../../hooks/capsule');

describe('CapsuleList', () => {
	beforeEach(() => {
		useGetCapsules.mockImplementation(() => ({ isLoading: true }));
	});

	afterEach(() => {
		jest.clearAllMocks();
		cleanup();
	});

	it('should render correctly', () => {
		const { container } = render(
			<QueryClientProvider client={new QueryClient()}>
				<CapsuleList />
			</QueryClientProvider>,
		);
		expect(container).toMatchSnapshot();
	});

	it('should render correctly with data', () => {
		render(
			<QueryClientProvider client={new QueryClient()}>
				<CapsuleList />
			</QueryClientProvider>,
		);

		expect(useGetCapsules).toHaveBeenCalledWith(
			{ capsuleStatus: '', capsuleType: '', serialId: '' },
			1,
		);
	});

	it('should render correctly with data and filters', () => {
		render(
			<CapsuleFilterContext.Provider
				value={{
					filter: { capsuleStatus: 'active', capsuleType: 'Dragon 1.0', serialId: 'C101' },
					page: 2,
				}}
			>
				<QueryClientProvider client={new QueryClient()}>
					<CapsuleList capsuleStatus='active' capsuleType='Dragon 1.0' serialId='C101' />
				</QueryClientProvider>
			</CapsuleFilterContext.Provider>,
		);

		expect(useGetCapsules).toHaveBeenCalledWith(
			{ capsuleStatus: 'active', capsuleType: 'Dragon 1.0', serialId: 'C101' },
			2,
		);
	});

	it('should display loading indicator', () => {
		const { getByTestId } = render(
			<QueryClientProvider client={new QueryClient()}>
				<CapsuleList />
			</QueryClientProvider>,
		);

		expect(getByTestId('loading-indicator')).toBeInTheDocument();
	});

	it('should change page', async () => {
		useGetCapsules.mockImplementation(() => ({
			isLoading: false,
			data: {
				docs: [
					{
						reuse_count: 0,
						water_landings: 1,
						land_landings: 0,
						last_update: 'Hanging in atrium at SpaceX HQ in Hawthorne ',
						launches: ['5eb87cdeffd86e000604b330'],
						serial: 'C101',
						status: 'retired',
						type: 'Dragon 1.0',
						id: '5e9e2c5bf35918ed873b2664',
					},
					{
						reuse_count: 0,
						water_landings: 1,
						land_landings: 0,
						last_update: "On display at KSC Visitor's Center ",
						launches: ['5eb87cdfffd86e000604b331'],
						serial: 'C102',
						status: 'retired',
						type: 'Dragon 1.0',
						id: '5e9e2c5bf3591882af3b2665',
					},
					{
						reuse_count: 0,
						water_landings: 1,
						land_landings: 0,
						last_update: 'Location and status unknown',
						launches: ['5eb87ce0ffd86e000604b332'],
						serial: 'C103',
						status: 'unknown',
						type: 'Dragon 1.0',
						id: '5e9e2c5bf3591835983b2666',
					},
					{
						reuse_count: 0,
						water_landings: 1,
						land_landings: 0,
						last_update: 'Location and status unknown',
						launches: ['5eb87ce1ffd86e000604b333'],
						serial: 'C104',
						status: 'unknown',
						type: 'Dragon 1.0',
						id: '5e9e2c5bf359189ef23b2667',
					},
					{
						reuse_count: 0,
						water_landings: 1,
						land_landings: 0,
						last_update: 'Location and status unknown',
						launches: ['5eb87ce4ffd86e000604b337'],
						serial: 'C105',
						status: 'unknown',
						type: 'Dragon 1.1',
						id: '5e9e2c5bf3591859a63b2668',
					},
					{
						reuse_count: 2,
						water_landings: 3,
						land_landings: 0,
						last_update:
							'As of January 8, 2020: Arrived at Port of LA after splashdown following CRS-19 mission',
						launches: [
							'5eb87ce7ffd86e000604b33b',
							'5eb87d03ffd86e000604b352',
							'5eb87d39ffd86e000604b37e',
						],
						serial: 'C106',
						status: 'active',
						type: 'Dragon 1.1',
						id: '5e9e2c5bf3591880643b2669',
					},
					{
						reuse_count: 0,
						water_landings: 1,
						land_landings: 0,
						last_update: 'Location and status unknown',
						launches: ['5eb87ce8ffd86e000604b33c'],
						serial: 'C107',
						status: 'unknown',
						type: 'Dragon 1.1',
						id: '5e9e2c5bf35918165f3b266a',
					},
					{
						reuse_count: 2,
						water_landings: 3,
						land_landings: 0,
						last_update:
							'As of August 29, 2019: Arrived at Port of LA after splashdown following CRS-18 mission',
						launches: [
							'5eb87cecffd86e000604b33f',
							'5eb87d0effd86e000604b35c',
							'5eb87d36ffd86e000604b37b',
						],
						serial: 'C108',
						status: 'active',
						type: 'Dragon 1.1',
						id: '5e9e2c5cf359188bfb3b266b',
					},
					{
						reuse_count: 0,
						water_landings: 1,
						land_landings: 0,
						last_update: 'Destroyed on impact after F9 launch failure',
						launches: ['5eb87ceeffd86e000604b341'],
						serial: 'C109',
						status: 'destroyed',
						type: 'Dragon 1.1',
						id: '5e9e2c5cf35918407d3b266c',
					},
					{
						reuse_count: 1,
						water_landings: 2,
						land_landings: 0,
						last_update: 'Location and status unknown',
						launches: ['5eb87cf3ffd86e000604b345', '5eb87d16ffd86e000604b364'],
						serial: 'C110',
						status: 'active',
						type: 'Dragon 1.1',
						id: '5e9e2c5cf3591885d43b266d',
					},
				],
				totalDocs: 25,
				limit: 10,
				totalPages: 3,
				page: 1,
				pagingCounter: 1,
				hasPrevPage: false,
				hasNextPage: true,
				prevPage: null,
				nextPage: 2,
			},
		}));

		const setFilter = jest.fn();
		const setPage = jest.fn();

		const { getByRole } = render(
			<CapsuleFilterContext.Provider
				value={{
					filter: { capsuleStatus: 'active', capsuleType: 'Dragon 1.0', serialId: 'C101' },
					page: 1,
					limit: 10,
					setFilter,
					setPage,
				}}
			>
				<QueryClientProvider client={new QueryClient()}>
					<CapsuleList capsuleStatus='active' capsuleType='Dragon 1.0' serialId='C101' />
				</QueryClientProvider>
			</CapsuleFilterContext.Provider>,
		);

		expect(useGetCapsules).toHaveBeenCalledWith(
			{ capsuleStatus: 'active', capsuleType: 'Dragon 1.0', serialId: 'C101' },
			1,
		);

		expect(getByRole('button', { name: 'Previous' })).toBeDisabled();

		act(() => {
			getByRole('button', { name: 'Next' }).click();
		});

		expect(setPage).toHaveBeenCalledWith(2);
	});
});
