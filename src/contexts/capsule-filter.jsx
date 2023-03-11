import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

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
		[filter, page],
	);

	return <CapsuleFilterContext.Provider value={value}>{children}</CapsuleFilterContext.Provider>;
}

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
