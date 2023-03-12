import { useParams } from 'react-router-dom';

import convertToInternationalCurrencySystem from '../../utils/currency';
import { useGetRocket } from '../../hooks/rocket';
import Carousel from '../Carousel';
import NA from '../NA';

function Rocket() {
	const { id } = useParams();

	const { data: rocket, isLoading } = useGetRocket(id);

	const {
		name: rocketName,
		type,
		description,
		company,
		boosters,
		stages,
		wikipedia,
		country,
		active,
		first_flight: firstFlight,
		cost_per_launch: costPerLaunch,
		success_rate_pct: successRate,
	} = rocket || {};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const activeClass = active
		? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
		: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';

	return (
		<div className='p-10'>
			<div className='grid grid-cols-12 gap-10'>
				<div className='col-span-7 rounded-lg overflow-hidden'>
					<Carousel images={rocket?.flickr_images} pause={false} />
				</div>
				<div className='col-span-5'>
					<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
						{rocketName}
					</h1>
					<span className='bg-blue-100 capitalize text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
						{type}
					</span>
					<span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
						{company}
					</span>
					<span className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded ${activeClass}`}>
						{active ? 'Active' : 'Inactive'}
					</span>
					<p className='text-xl text-neutral-600 dark:text-neutral-200 mt-5'>{description}</p>
					<p className='text-base text-neutral-600 dark:text-neutral-200 mt-5'>
						<span className='font-bold'>Location: </span>
						{country}
					</p>
					<div className='grid grid-cols-2 text-neutral-600 dark:text-neutral-200 mt-5 gap-4'>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>First Flight:</div>
							<p>{firstFlight ?? <NA />}</p>
						</div>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>Success Rate:</div>
							<p>{successRate ?? <NA />}</p>
						</div>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>Cost/Launch:</div>
							<p>{convertToInternationalCurrencySystem(costPerLaunch) ?? <NA />}</p>
						</div>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>Stages:</div>
							<p>{stages ?? <NA />}</p>
						</div>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>Boosters:</div>
							<p>{boosters ?? <NA />}</p>
						</div>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>Wikipedia:</div>
							{wikipedia ? (
								<a
									href={wikipedia}
									target='_blank'
									rel='noreferrer'
									className='text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
										/>
									</svg>
								</a>
							) : (
								<NA />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rocket;
