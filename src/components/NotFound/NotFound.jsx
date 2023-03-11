import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<main className='h-screen w-full flex flex-col justify-center items-center'>
			<h1 className='text-9xl font-extrabold text-gray-800 tracking-widest dark:text-gray-200'>
				404
			</h1>
			<div className='bg-red-400 px-2 text-sm rounded rotate-12 absolute'>Page Not Found</div>
			<Link
				to='/'
				className='text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-600 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-zinc-500 rounded-lg text-xl p-2.5 inline-flex items-center'
			>
				Go Home
			</Link>
		</main>
	);
}

export default NotFound;
