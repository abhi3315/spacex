import propTypes from 'prop-types';

import { useGetCapsule } from '../../hooks/capsule';
import capsuleUtil from '../../utils/capsules';
import NA from '../NA';

function Capsule({ id, isOpen, onClose }) {
	const { data: capsule, isLoading } = useGetCapsule(id);

	const {
		serial,
		type,
		status,
		launches,
		last_update: lastUpdate,
		reuse_count: reuseCount,
		water_landings: waterLandings,
		land_landings: landLandings,
	} = capsule || {};

	const statusLabels = capsuleUtil.getCapsuleStatusLabels();
	const statusColor = capsuleUtil.getStatusColor(status, false);
	const colorClass = `bg-${statusColor}-100 text-${statusColor}-800 dark:bg-${statusColor}-900 dark:text-${statusColor}-300`;

	if (!isOpen) {
		return null;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div
				tabIndex='-1'
				aria-hidden='true'
				onClick={onClose}
				className='fixed top-50 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full flex justify-center items-center'
			>
				<div
					className='relative w-full h-full max-w-2xl md:h-auto'
					aria-hidden='true'
					onClick={(e) => e.stopPropagation()}
				>
					<div className='relative bg-white rounded-lg shadow dark:bg-zinc-700'>
						<div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
							<h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
								{serial}
								<span className='bg-blue-100 ml-5 capitalize text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
									{type}
								</span>
								<span className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded ${colorClass}`}>
									{statusLabels[status]}
								</span>
							</h3>
							<button
								type='button'
								className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
								onClick={onClose}
							>
								<svg
									aria-hidden='true'
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
								<span className='sr-only'>Close modal</span>
							</button>
						</div>
						<div className='p-6 space-y-6 text-neutral-600 dark:text-neutral-200'>
							<p className='text-base'>
								<span className='font-bold'>Last Update: </span>
								{lastUpdate}
							</p>
							<div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
								<div className='grid grid-cols-2'>
									<div className='line-clamp-1 font-bold'>Reuse Count:</div>
									<div>{reuseCount ?? <NA />}</div>
								</div>
								<div className='grid grid-cols-2'>
									<div className='line-clamp-1 font-bold'>Launches:</div>
									<div>{launches?.length ?? <NA />}</div>
								</div>
								<div className='grid grid-cols-2'>
									<div className='line-clamp-1 font-bold'>Water Landings:</div>
									<div>{waterLandings ?? <NA />}</div>
								</div>
								<div className='grid grid-cols-2'>
									<div className='line-clamp-1 font-bold'>Land Landings:</div>
									<div>{landLandings ?? <NA />}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-30 fixed inset-0 z-40 bg-black dark:bg-white' />
		</>
	);
}

Capsule.propTypes = {
	id: propTypes.string.isRequired,
	isOpen: propTypes.bool,
	onClose: propTypes.func,
};

Capsule.defaultProps = {
	isOpen: false,
	onClose: () => {},
};

export default Capsule;
