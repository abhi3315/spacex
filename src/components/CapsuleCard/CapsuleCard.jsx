import propTypes from 'prop-types';

import { capsuleStatus } from '../FilterForm/FilterForm.const';
import Icons from './CapsuleCard.icons';

function CapsuleCard({ capsule }) {
	const {
		serial,
		status,
		type,
		water_landings: waterLandings,
		land_landings: landLandings,
		reuse_count: reuseCount,
		last_update: lastUpdate,
	} = capsule;

	const statuses = capsuleStatus.reduce((acc, statusItr) => {
		acc[statusItr.value] = statusItr.value;
		return acc;
	}, {});

	const statusLabels = capsuleStatus.reduce((acc, statusItr) => {
		acc[statusItr.value] = statusItr.label;
		return acc;
	}, {});

	let statusColor = 'text-green-500';

	switch (status) {
		case statuses.active:
			statusColor = 'text-green-500';
			break;
		case statuses.retired:
			statusColor = 'text-red-500';
			break;
		case 'unknown':
			statusColor = 'text-yellow-500';
			break;
		case 'destroyed':
			statusColor = 'text-red-500';
			break;
		default:
			statusColor = 'text-green-500';
			break;
	}

	return (
		<div className='flex justify-center cursor-pointer'>
			<div className='block max-w-sm rounded-2xl overflow-hidden bg-white text-center shadow-lg hover:shadow-2xl transition duration-500 ease-in-out dark:bg-neutral-700 w-full'>
				<div className='p-6 h-32 overflow-hidden'>
					<h5 className='mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 line-clamp-1'>
						<span title='Capsule Serial'>{serial}</span> | <span title='Capsule Type'>{type}</span>
					</h5>
					<p className='text-base text-neutral-600 dark:text-neutral-200 line-clamp-2'>
						<strong>Last Update: </strong>
						{lastUpdate}
					</p>
				</div>
				<div className='border-t-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50 grid grid-cols-2 gap-4 pb-8'>
					<div className='flex justify-center items-center flex-col' title='Status'>
						<Icons.Status color={statusColor} />
						<p className={`line-clamp-1 ${statusColor}`}>{statusLabels[status]}</p>
					</div>
					<div className='flex justify-center items-center flex-col' title='Resuse Count'>
						<Icons.Reuse />
						<p>{reuseCount}</p>
					</div>
					<div className='flex justify-center items-center flex-col' title='Land Landings'>
						<Icons.Truck />
						<p>{landLandings}</p>
					</div>
					<div className='flex justify-center items-center flex-col' title='Water Landings'>
						<Icons.Lifebuoy />
						<p>{waterLandings}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

CapsuleCard.propTypes = {
	capsule: propTypes.shape({
		id: propTypes.string,
		serial: propTypes.string,
		status: propTypes.string,
		type: propTypes.string,
		last_update: propTypes.string,
		water_landings: propTypes.number,
		land_landings: propTypes.number,
		reuse_count: propTypes.number,
	}),
};

CapsuleCard.defaultProps = {
	capsule: {},
};

export default CapsuleCard;
