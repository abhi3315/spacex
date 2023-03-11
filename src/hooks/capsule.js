import { useQuery } from 'react-query';

/**
 * useGetCapsules - React Query hook to fetch all capsules
 * @returns {Object} - Object containing the data and status of the query
 * @example const { data, status } = useGetCapsules();
 */
export const useGetCapsules = () =>
	useQuery('capsules', () => fetch('/api/capsules').then((res) => res.json()));

/**
 * useGetCapsule - React Query hook to fetch a single capsule
 * @param {string} id - ID of the capsule to fetch
 * @returns {Object} - Object containing the data and status of the query
 * @example const { data, status } = useGetCapsule('5e9e2c5bf35918ed873b2663');
 *
 */
export const useGetCapsule = (id) =>
	useQuery(['capsule', id], () => fetch(`/api/capsules/${id}`).then((res) => res.json()));
