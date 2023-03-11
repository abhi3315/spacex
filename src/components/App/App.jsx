import { useState } from 'react';

import RocketList from '../RocketList';
import Header from '../Header';
import HeroBanner from '../HeroBanner';
import FilterForm from '../FilterForm';

const theme = localStorage.getItem('theme');

export default function App() {
	const [appTheme, setAppTheme] = useState(theme === 'dark' ? 'dark' : 'light');

	const toggleTheme = () => {
		const themeToSet = appTheme === 'light' ? 'dark' : 'light';

		setAppTheme(themeToSet);
		localStorage.setItem('theme', themeToSet);
	};

	return (
		<div className={appTheme}>
			<section className='light min-h-screen bg-slate-50 dark:bg-zinc-700 w-full'>
				<Header theme={appTheme} toggleTheme={toggleTheme} />
				<HeroBanner />
				<RocketList />
				<FilterForm />
			</section>
		</div>
	);
}
