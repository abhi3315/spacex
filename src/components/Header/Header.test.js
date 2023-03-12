import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import ThemeContext from '../../contexts/theme';
import Header from './Header';

afterEach(cleanup);

describe('Header', () => {
	it('should render correctly', () => {
		const { container } = render(<Header />, {
			wrapper: BrowserRouter,
		});
		expect(container).toMatchSnapshot();
	});

	it('should render correctly with dark theme', () => {
		const { container } = render(
			<ThemeContext.Provider value={{ theme: 'dark' }}>
				<Header />
			</ThemeContext.Provider>,
			{
				wrapper: BrowserRouter,
			},
		);
		expect(container).toMatchSnapshot();
	});

	it('should render correctly with light theme', () => {
		const { container } = render(
			<ThemeContext.Provider value={{ theme: 'light' }}>
				<Header />
			</ThemeContext.Provider>,
			{
				wrapper: BrowserRouter,
			},
		);
		expect(container).toMatchSnapshot();
	});

	it('should render correctly with dark theme and toggle button', async () => {
		const toggleTheme = jest.fn();

		const { getByRole } = render(
			<ThemeContext.Provider value={{ theme: 'dark', toggleTheme }}>
				<Header />
			</ThemeContext.Provider>,
			{
				wrapper: BrowserRouter,
			},
		);

		await act(async () => {
			fireEvent.click(
				getByRole('button', {
					name: 'Toggle Dark Mode',
				}),
			);
		});

		expect(toggleTheme).toHaveBeenCalled();
	});

	it('should navigate to home page', async () => {
		const { getByRole } = render(<Header />, {
			wrapper: MemoryRouter,
		});

		await act(async () => {
			fireEvent.click(
				getByRole('link', {
					name: 'Home',
				}),
			);
		});

		expect(window.location.pathname).toBe('/');
	});
});
