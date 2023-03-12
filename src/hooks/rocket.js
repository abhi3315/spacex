import { useQuery } from 'react-query';

const SPACE_API = process.env.REACT_APP_SPACEX_API_URL;

/**
 * useGetRockets - React Query hook to fetch all rockets
 *
 * @returns {Object} - Object containing the data and status of the query
 *
 * @example const { data, status } = useGetRockets();
 */
export const useGetRockets = () =>
	useQuery('rockets', () => fetch(`${SPACE_API}/rockets`).then((res) => res.json()), {
		refetchOnWindowFocus: false,
	});

/**
 * useGetRocket - React Query hook to fetch a single rocket
 *
 * @param {string} id - ID of the rocket to fetch
 *
 * @returns {Object} - Object containing the data and status of the query
 */
export const useGetRocket = (id) =>
	useQuery(['rocket', id], () => fetch(`${SPACE_API}/rockets/${id}`).then((res) => res.json()));
