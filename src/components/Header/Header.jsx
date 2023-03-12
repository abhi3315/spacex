import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/theme';

import DarkShuttleIcon from '../../assets/shuttle-dark.png';
import LightShuttleIcon from '../../assets/shuttle-light.png';

const DarkIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 20 20'
		fill='currentColor'
		aria-hidden='true'
		className='w-5 h-5'
	>
		<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
	</svg>
);

const LightIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 20 20'
		fill='currentColor'
		aria-hidden='true'
		className='w-5 h-5'
	>
		<path
			fillRule='evenodd'
			d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
			clipRule='evenodd'
		/>
	</svg>
);

function Header() {
	const { theme, toggleTheme } = useTheme();

	return (
		<header>
			<nav className='bg-white border-gray-200 px-10 xl:px-32 shadow-2xl py-2.5 dark:bg-zinc-800'>
				<div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
					<Link to='/' className='flex items-center' aria-label='Home'>
						<img
							src={theme === 'dark' ? LightShuttleIcon : DarkShuttleIcon}
							className='mr-3 h-6 sm:h-9'
							alt='Light Space Shuttle Logo'
						/>
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							Shuttle
						</span>
					</Link>
					<div className='flex items-center lg:order-2'>
						<button
							aria-label='Toggle Dark Mode'
							onClick={toggleTheme}
							type='button'
							className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center'
						>
							{theme === 'dark' ? LightIcon : DarkIcon}
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
