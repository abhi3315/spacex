import { useCapsuleFilter } from '../../contexts/capsule-filter';
import { useGetCapsules } from '../../hooks/capsule';
import CapsuleCard from '../CapsuleCard';
import LoadingCard from '../LoadingCard';
import Pagination from './Pagination';

function CapsuleList() {
	const { page, filter } = useCapsuleFilter();

	const { data: capsules, isLoading, isError } = useGetCapsules(filter, page);

	const capsuleList = capsules?.docs?.map((capsuleData) => (
		<CapsuleCard key={capsuleData.id} capsule={capsuleData} />
	));

	const capsuleListLoading = (
		<div data-testid='loading-indicator'>
			{new Array(3).fill(0).map(() => (
				<LoadingCard key={Math.random()} />
			))}
		</div>
	);

	const { hasNextPage, hasPrevPage, totalDocs } = capsules || {};

	if (isError) {
		return (
			<h3 className='text-center my-10 text-xl text-red-500'>
				Unable to load Capsule list. Please try again later.
			</h3>
		);
	}

	return (
		<div className='mb-32'>
			<div className='grid grid-cols-1 gap-10 px-10 pb-20 xl:px-32 lg:grid-cols-3 md:grid-cols-2'>
				{isLoading ? capsuleListLoading : capsuleList}
			</div>
			{isLoading || !capsules?.docs?.length ? null : (
				<Pagination hasNextPage={hasNextPage} hasPrevPage={hasPrevPage} totalCapsules={totalDocs} />
			)}
		</div>
	);
}

export default CapsuleList;
