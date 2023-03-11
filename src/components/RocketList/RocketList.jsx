import { useGetRockets } from '../../hooks/rocket';

import LoadingCard from '../LoadingCard';
import RocketCard from '../RocketCard';

export default function RocketList() {
	const { data: rockets, isLoading } = useGetRockets();

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
			<div className='grid grid-cols-1 gap-10 px-10 pb-20 xl:px-32 lg:grid-cols-3 md:grid-cols-2'>
				{isLoading ? rocketListLoading : rocketList}
			</div>
		</>
	);
}
