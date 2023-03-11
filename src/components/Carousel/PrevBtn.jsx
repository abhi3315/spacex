import PropTypes from 'prop-types';

function PrevBtn({ handleClick }) {
	<button
		className='absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
		type='button'
		data-te-target='#carouselExampleIndicators'
		data-te-slide='prev'
		onClick={handleClick}
	>
		<span className='inline-block h-8 w-8'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='currentColor'
				className='h-6 w-6'
			>
				<path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
			</svg>
		</span>
		<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
			Previous
		</span>
	</button>;
}

PrevBtn.propTypes = {
	handleClick: PropTypes.func.isRequired,
};

export default PrevBtn;
