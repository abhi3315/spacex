import { render, cleanup } from '@testing-library/react';

import Carousel from './Carousel';

afterEach(cleanup);

describe('Carousel', () => {
	it('should render correctly', () => {
		const { container } = render(<Carousel />);
		expect(container).toMatchSnapshot();
	});

	it('should render the correct number of images', () => {
		const images = ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'];
		const { getAllByRole } = render(<Carousel images={images} />);
		const renderedImages = getAllByRole('img');
		expect(renderedImages).toHaveLength(images.length);
	});
});
