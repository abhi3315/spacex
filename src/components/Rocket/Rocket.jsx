import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetRocket } from '../../hooks/rocket';
import convertToInternationalCurrencySystem from '../../utils/currency';
import Carousel from '../Carousel';
import NA from '../NA';

function Rocket() {
	const [unit, setUnit] = useState('metric');

	const units = {
		metric: {
			label: 'Metric',
			distance: 'meters',
			mass: 'kg',
			temperature: '°C',
			volume: 'm³',
		},
		imperial: {
			label: 'Imperial',
			distance: 'feet',
			mass: 'lb',
			temperature: '°F',
			volume: 'ft³',
		},
	};

	const handleUnitChange = (e) => {
		setUnit(e.target.value);
	};

	const { id } = useParams();

	const { data: rocket, isLoading, isError } = useGetRocket(id);

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
		height,
		diameter,
		mass,
		first_flight: firstFlight,
		cost_per_launch: costPerLaunch,
		success_rate_pct: successRate,
	} = rocket || {};

	if (isLoading) {
		return (
			<div role='status' className='mt-10 flex justify-center'>
				<svg
					aria-hidden='true'
					className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
					viewBox='0 0 100 101'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
						fill='currentColor'
					/>
					<path
						d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
						fill='currentFill'
					/>
				</svg>
				<span className='sr-only'>Loading...</span>
			</div>
		);
	}

	if (isError) {
		return (
			<h3 className='text-center mt-10 text-xl text-red-500'>
				Something went wrong. Please try again later.
			</h3>
		);
	}

	const activeClass = active
		? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
		: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';

	return (
		<div className='p-10'>
			<div className='grid grid-cols-1 gap-10 md:grid-cols-12'>
				<div className='col-span-7 rounded-lg overflow-hidden'>
					<Carousel interval={8000} images={rocket?.flickr_images} pause={false} />
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
					<div className='grid grid-cols-1 sm:grid-cols-2 text-neutral-600 dark:text-neutral-200 mt-5 gap-4'>
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
					<div className='mt-5'>
						<select
							id='rocket-unit'
							value={unit}
							onChange={handleUnitChange}
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							{Object.keys(units).map((unitKey) => (
								<option key={unitKey} value={unitKey}>
									{units[unitKey].label}
								</option>
							))}
						</select>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 text-neutral-600 dark:text-neutral-200 mt-5 gap-4'>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>Height:</div>
							<p>
								{height[units[unit]?.distance] ? (
									`${height[units[unit]?.distance] ?? ''} ${units[unit]?.distance ?? ''}`
								) : (
									<NA />
								)}
							</p>
						</div>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>Diameter:</div>
							<p>
								{diameter[units[unit]?.distance] ? (
									`${diameter[units[unit]?.distance] ?? ''} ${units[unit]?.distance ?? ''}`
								) : (
									<NA />
								)}
							</p>
						</div>
						<div className='grid grid-cols-2'>
							<div className='line-clamp-1 font-bold'>Mass:</div>
							<p>
								{mass[units[unit]?.mass] ? (
									`${mass[units[unit]?.mass] ?? ''} ${units[unit]?.mass ?? ''}`
								) : (
									<NA />
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rocket;
