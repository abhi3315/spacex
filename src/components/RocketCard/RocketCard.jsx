import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import convertToInternationalCurrencySystem from '../../utils/currency';
import Carousel from '../Carousel';
import Icons from './RocketCard.icons';

function RocketCard({ rocket }) {
	const navigate = useNavigate();

	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleUnhover = () => {
		setIsHovered(false);
	};

	const handleCardClick = () => {
		navigate(`/rockets/${rocket.id}`);
	};

	const {
		name: rocketName,
		flickr_images: images,
		first_flight: firstFlight,
		success_rate_pct: successRate,
		cost_per_launch: costPerLaunch,
		country,
		description,
	} = rocket;

	let successRateColor = 'text-yellow-500';
	if (successRate < 30) {
		successRateColor = 'text-red-500';
	} else if (successRate > 70) {
		successRateColor = 'text-green-500';
	}

	return (
		<div
			aria-hidden='true'
			className='flex justify-center cursor-pointer'
			onClick={handleCardClick}
			onMouseEnter={handleHover}
			onMouseLeave={handleUnhover}
		>
			<div className='block max-w-sm rounded-2xl overflow-hidden bg-white text-center shadow-lg hover:shadow-2xl transition duration-500 ease-in-out dark:bg-neutral-700 w-full'>
				<div className='sm:h-1/2'>
					{images?.length > 0 && (
						<Carousel images={images} pause={!isHovered} interval={2000} controls={false} />
					)}
				</div>
				<div className='p-6'>
					<h5 className='mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 line-clamp-1'>
						{rocketName}
					</h5>
					<p className='text-base text-neutral-600 dark:text-neutral-200 line-clamp-2'>
						{description}
					</p>
				</div>
				<div className='border-t-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50 grid grid-cols-2 gap-4 pb-8 mb-4'>
					<div className='flex justify-center items-center flex-col' title='Country'>
						<Icons.LocationPin />
						<p className='line-clamp-1'>{country}</p>
					</div>
					<div className='flex justify-center items-center flex-col' title='First Flight'>
						<Icons.Rocket />
						<p>{firstFlight}</p>
					</div>
					<div className='flex justify-center items-center flex-col' title='SuccessRate'>
						<Icons.Fire successRateColor={successRateColor} />
						<p className={successRateColor}>{successRate}%</p>
					</div>
					<div className='flex justify-center items-center flex-col' title='Cose Per Launch ($)'>
						<Icons.Dollar />
						<p>{convertToInternationalCurrencySystem(costPerLaunch)}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

RocketCard.propTypes = {
	rocket: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		description: PropTypes.string,
		first_flight: PropTypes.string,
		flickr_images: PropTypes.arrayOf(PropTypes.string),
		success_rate_pct: PropTypes.number,
		cost_per_launch: PropTypes.number,
		country: PropTypes.string,
	}),
};

RocketCard.defaultProps = {
	rocket: {
		flickr_images: [],
	},
};

export default RocketCard;
