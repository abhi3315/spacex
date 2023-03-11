import { useQuery } from 'react-query';

/**
 * useGetRockets - React Query hook to fetch all rockets
 * @returns {Object} - Object containing the data and status of the query
 * @example const { data, status } = useGetRockets();
 */
export const useGetRockets = () =>
	useQuery('rockets', () => fetch('/api/rockets').then((res) => res.json()));

/**
 * useGetRocket - React Query hook to fetch a single rocket
 * @param {string} id - ID of the rocket to fetch
 * @returns {Object} - Object containing the data and status of the query
 */
export const useGetRocket = (id) =>
	useQuery(['rocket', id], () => fetch(`/api/rockets/${id}`).then((res) => res.json()));
