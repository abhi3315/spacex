import { useGetRockets } from '../../hooks/rocket';

import LoadingCard from '../LoadingCard';
import RocketCard from '../RocketCard';

export default function RocketList() {
	const { data: rockets, isLoading, isError } = useGetRockets();

	const rocketList = rockets?.map((rocketData) => (
		<RocketCard key={rocketData.id} rocket={rocketData} />
	));

	const rocketListLoading = new Array(3)
		.fill(0)
		.map(() => <LoadingCard key={Math.random()} hasImage />);

	return (
		<>
			<h2 className='dark:text-white text-4xl md:text-5xl font-bold text-center my-5 sm:my-20'>
				SpaceX Rockets
			</h2>
			{isError && (
				<h3 className='text-center mb-20 text-xl text-red-500'>
					Unable to load Rocket lists. Please try again later.
				</h3>
			)}
			{rockets?.length === 0 && !isError && !isLoading && (
				<h3 className='text-center mb-20 text-xl text-red-500'>No Rockets Found.</h3>
			)}
			<div className='grid grid-cols-1 gap-10 px-10 pb-20 xl:px-32 lg:grid-cols-3 md:grid-cols-2'>
				{isLoading ? rocketListLoading : rocketList}
			</div>
		</>
	);
}
