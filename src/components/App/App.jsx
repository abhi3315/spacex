import { useState } from 'react';

import RocketList from '../RocketList';
import CapsuleList from '../CapsuleList';
import Header from '../Header';
import HeroBanner from '../HeroBanner';
import FilterForm from '../FilterForm';

const theme = localStorage.getItem('theme');
document.documentElement.classList.add(theme);

export default function App() {
	const [filter, setFilter] = useState({});

	const handleFormSubmit = (filterData) => setFilter(filterData);

	return (
		<div className='light min-h-screen w-full'>
			<Header />
			<HeroBanner />
			<RocketList />
			<FilterForm handleFormSubmit={handleFormSubmit} />
			<CapsuleList filter={filter} />
		</div>
	);
}
