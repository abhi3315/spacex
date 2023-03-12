import { useQuery } from 'react-query';

const SPACE_API = process.env.REACT_APP_SPACEX_API_URL;

/**
 * useGetCapsules - React Query hook to fetch all capsules
 *
 * @returns {Object} - Object containing the data and status of the query
 *
 * @example const { data, status } = useGetCapsules();
 */
export const useGetCapsules = (
	{ capsuleStatus = '', capsuleType = '', serialId = '' },
	page = 1,
	limit = 10,
) =>
	useQuery(
		['capsules', capsuleStatus, capsuleType, serialId, page, limit],
		() => {
			const query = {
				...(capsuleStatus && { status: capsuleStatus }),
				...(capsuleType && { type: capsuleType }),
				...(serialId && {
					serial: {
						$regex: serialId,
					},
				}),
			};

			const options = {
				page,
				limit,
			};

			return fetch(`${SPACE_API}/capsules/query`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query,
					options,
				}),
			}).then((res) => res.json());
		},
		{
			refetchOnWindowFocus: false,
		},
	);

/**
 * useGetCapsule - React Query hook to fetch a single capsule
 *
 * @param {string} id - ID of the capsule to fetch
 *
 * @returns {Object} - Object containing the data and status of the query
 *
 * @example const { data, status } = useGetCapsule('5e9e2c5bf35918ed873b2663');
 *
 */
export const useGetCapsule = (id) =>
	useQuery(['capsule', id], () => fetch(`${SPACE_API}/capsules/${id}`).then((res) => res.json()));
