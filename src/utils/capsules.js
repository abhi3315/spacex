import { capsuleStatus } from '../components/FilterForm/FilterForm.const';

/**
 * getCapsuleStatuses - Returns an object containing the status values
 *
 * @returns {Object} - Object containing the status values
 */
const getCapsuleStatuses = () =>
	capsuleStatus.reduce((acc, statusItr) => {
		acc[statusItr.value] = statusItr.value;
		return acc;
	}, {});

/**
 * getCapsuleStatusLabels - Returns an object containing the status labels
 *
 * @returns {Object} - Object containing the status labels
 */
const getCapsuleStatusLabels = () =>
	capsuleStatus.reduce((acc, statusItr) => {
		acc[statusItr.value] = statusItr.label;
		return acc;
	}, {});

/**
 * getStatusColor - Returns the color for a given status
 *
 * @param {string} status - Status to get the color for
 * @returns {string} - Color for the given status
 */
const getStatusColor = (status, colorClass = true) => {
	const statuses = getCapsuleStatuses();

	let statusColor = 'green';
	switch (status) {
		case statuses.active:
			statusColor = 'green';
			break;
		case statuses.retired:
			statusColor = 'red';
			break;
		case statuses.unknown:
			statusColor = 'yellow';
			break;
		case statuses.destroyed:
			statusColor = 'red';
			break;
		default:
			statusColor = 'green';
			break;
	}

	if (!colorClass) {
		return statusColor;
	}

	return `text-${statusColor}-500`;
};

export default { getStatusColor, getCapsuleStatuses, getCapsuleStatusLabels };
