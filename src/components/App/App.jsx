import { useState } from 'react';

import RocketList from '../RocketList';
import CapsuleList from '../CapsuleList';
import Header from '../Header';
import HeroBanner from '../HeroBanner';
import FilterForm from '../FilterForm';

const theme = localStorage.getItem('theme');
document.documentElement.classList.add(theme);

export default function App() {
	const [appTheme, setAppTheme] = useState(theme === 'dark' ? 'dark' : 'light');
	const [filter, setFilter] = useState({});

	const toggleTheme = () => {
		const themeToSet = appTheme === 'light' ? 'dark' : 'light';

		setAppTheme(themeToSet);
		localStorage.setItem('theme', themeToSet);
		document.documentElement.classList.remove(appTheme);
		document.documentElement.classList.add(themeToSet);
	};

	const handleFormSubmit = (filterData) => setFilter(filterData);

	return (
		<div className='light min-h-screen w-full'>
			<Header theme={appTheme} toggleTheme={toggleTheme} />
			<HeroBanner />
			<RocketList />
			<FilterForm handleFormSubmit={handleFormSubmit} />
			<CapsuleList filter={filter} />
		</div>
	);
}
