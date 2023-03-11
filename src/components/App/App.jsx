import { Route, Routes } from 'react-router-dom';

import CapsuleList from '../CapsuleList';
import FilterForm from '../FilterForm';
import Header from '../Header';
import HeroBanner from '../HeroBanner';
import NotFound from '../NotFound';
import RocketList from '../RocketList';

export default function App() {
	return (
		<div className='min-h-screen w-full'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<HeroBanner />
							<RocketList />
							<FilterForm />
							<CapsuleList />
						</>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}
