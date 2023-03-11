import { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';
import './Carousel.scss';

function Carousel({ images, controls, interval, pause }) {
	const [activeSlide, setActiveSlide] = useState(0);

	// Total number of images
	const totalImages = images.length;

	// Create refs for each image
	const refs = images.reduce((acc, val, index) => {
		acc[index] = createRef();
		return acc;
	}, {});

	/**
	 * Function to scroll to a specific slide
	 *
	 * @param {number} slideIndex Slide index to scroll to
	 */
	const scrollToImage = (slideIndex) => {
		setActiveSlide(slideIndex);
		refs[slideIndex].current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start',
		});
	};

	/**
	 * Function to scroll to the next slide
	 */
	const nextImage = () => {
		if (activeSlide >= totalImages - 1) {
			scrollToImage(0);
		} else {
			scrollToImage(activeSlide + 1);
		}
	};

	/**
	 * Function to scroll to the previous slide
	 */
	const previousImage = () => {
		if (activeSlide === 0) {
			scrollToImage(totalImages - 1);
		} else {
			scrollToImage(activeSlide - 1);
		}
	};

	useEffect(() => {
		// Scroll to the active slide
		scrollToImage(activeSlide);

		if (pause) {
			return;
		}

		// Set the interval
		const intervalId = setInterval(() => {
			nextImage();
		}, interval);

		// Clear the interval on unmount
		return () => clearInterval(intervalId);
	}, [activeSlide, pause, interval]);

	return (
		<div className='flex h-full justify-center w-full items-center carousel-component'>
			<div className='relative w-full h-full'>
				<div className='carousel'>
					{controls && <PrevBtn handleClick={previousImage} />}
					{images.map((src, index) => (
						<div className='w-full flex-shrink-0' key={src} ref={refs[index]}>
							<img
								src={src}
								alt={`slide-${index + 1}`}
								className='w-full h-full object-bottom object-cover'
								loading='lazy'
							/>
						</div>
					))}
					{controls && <NextBtn handleClick={nextImage} />}
				</div>
			</div>
		</div>
	);
}

Carousel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	controls: PropTypes.bool,
	interval: PropTypes.number,
	pause: PropTypes.bool,
};

Carousel.defaultProps = {
	controls: true,
	interval: 5000,
	pause: true,
};

export default Carousel;
