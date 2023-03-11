import propTypes from 'prop-types';
import { useFormik } from 'formik';

import { capsuleStatus, capsuleType } from './FilterForm.const';

function FilterForm({ handleFormSubmit }) {
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: {
			capsuleStatus: '',
			capsuleType: '',
			serialId: '',
		},
		onSubmit: (submittedData) => handleFormSubmit(submittedData),
	});

	return (
		<div className='px-10 xl:px-32 mb-5 sm:mb-20'>
			<h2 className='dark:text-white text-4xl md:text-5xl font-bold text-center my-5 sm:my-20'>
				SpaceX Capsules
			</h2>
			<div className='block rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800 w-full'>
				<form className='grid grid-cols-1 gap-4 md:grid-cols-4' onSubmit={handleSubmit}>
					<div>
						<label
							htmlFor='capsule-status'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Capsule Status
						</label>
						<select
							name='capsuleStatus'
							id='capsule-status'
							value={values.capsuleStatus}
							onChange={handleChange}
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							{capsuleStatus.map(({ value, label }) => (
								<option key={value} value={value}>
									{label}
								</option>
							))}
						</select>
					</div>
					<div>
						<label
							htmlFor='capsule-type'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Capsule Type
						</label>
						<select
							name='capsuleType'
							id='capsule-type'
							value={values.capsuleType}
							onChange={handleChange}
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							{capsuleType.map(({ value, label }) => (
								<option key={value} value={value}>
									{label}
								</option>
							))}
						</select>
					</div>
					<div>
						<label
							htmlFor='serial-id'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Serial ID
						</label>
						<input
							type='text'
							id='serial-id'
							name='serialId'
							value={values.serialId}
							onChange={handleChange}
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						/>
					</div>
					<div className='flex items-end justify-center'>
						<button
							type='submit'
							className='rounded px-8 py-2 shadow-md font-medium uppercase text-white bg-green-600 hover:bg-green-800 transition-all duration-200 ease-linear'
						>
							Filter
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

FilterForm.propTypes = {
	handleFormSubmit: propTypes.func.isRequired,
};

export default FilterForm;
