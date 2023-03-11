import CapsuleList from '../CapsuleList';
import FilterForm from '../FilterForm';
import Header from '../Header';
import HeroBanner from '../HeroBanner';
import RocketList from '../RocketList';

const theme = localStorage.getItem('theme');
document.documentElement.classList.add(theme);

export default function App() {
	return (
		<div className='light min-h-screen w-full'>
			<Header />
			<HeroBanner />
			<RocketList />
			<FilterForm />
			<CapsuleList />
		</div>
	);
}
