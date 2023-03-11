import propTypes from 'prop-types';

import LoadingCard from '../LoadingCard';
import CapsuleCard from '../CapsuleCard';
import Pagination from './Pagination';
import { useGetCapsules } from '../../hooks/capsule';

function CapsuleList({ filter }) {
	const { data: capsules, isLoading } = useGetCapsules(filter);

	const capsuleList = capsules?.docs?.map((capsuleData) => (
		<CapsuleCard key={capsuleData.id} capsule={capsuleData} />
	));

	const capsuleListLoading = new Array(3).fill(0).map(() => <LoadingCard key={Math.random()} />);

	return (
		<div className='mb-32'>
			<div className='grid grid-cols-1 gap-10 px-10 pb-20 xl:px-32 lg:grid-cols-3 md:grid-cols-2'>
				{isLoading ? capsuleListLoading : capsuleList}
			</div>
			<Pagination />
		</div>
	);
}

CapsuleList.propTypes = {
	filter: propTypes.shape({
		capsuleStatus: propTypes.string,
		capsuleType: propTypes.string,
		serialId: propTypes.string,
	}),
};

CapsuleList.defaultProps = {
	filter: {},
};

export default CapsuleList;
