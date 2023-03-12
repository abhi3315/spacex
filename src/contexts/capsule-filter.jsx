import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

/**
 * Capsule Filter Context.
 */
const CapsuleFilterContext = createContext({
	filter: {
		capsuleStatus: '',
		capsuleType: '',
		serialId: '',
	},
	page: 1,
	limit: 10,
	setFilter: () => {},
	setPage: () => {},
});

/**
 * Capsule Filter Provider.
 *
 * @param {JSX} param Children
 *
 * @returns {JSX} Provider
 */
export function CapsuleFilterProvider({ children }) {
	const [filter, setFilter] = useState({
		capsuleStatus: '',
		capsuleType: '',
		serialId: '',
	});
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);

	const handleFilterChange = (updatedFilters) => {
		setFilter(updatedFilters);
		setPage(1);
	};

	const value = useMemo(
		() => ({ filter, page, limit, setFilter: handleFilterChange, setPage, setLimit }),
		[filter, page, limit],
	);

	return <CapsuleFilterContext.Provider value={value}>{children}</CapsuleFilterContext.Provider>;
}

/**
 * Capsule Filter Hook.
 *
 * @returns {Object} Context
 */
export const useCapsuleFilter = () => {
	const context = useContext(CapsuleFilterContext);
	if (context === undefined) {
		throw new Error('useCapsuleFilter must be used within a CapsuleFilterProvider');
	}
	return context;
};

CapsuleFilterProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CapsuleFilterContext;
