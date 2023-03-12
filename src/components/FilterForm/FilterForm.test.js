import { act, cleanup, fireEvent, render } from '@testing-library/react';

import FilterForm from './FilterForm';

afterEach(cleanup);

describe('FilterForm', () => {
	it('should render correctly', () => {
		const { container } = render(<FilterForm />);
		expect(container).toMatchSnapshot();
	});

	it('should have intial form value to be empty', () => {
		const { getByTestId } = render(<FilterForm />);

		const capsuleStatusSelect = getByTestId('capsule-status');
		const capsuleTypeSelect = getByTestId('capsule-type');
		const capsuleSerialInput = getByTestId('serial-id');

		expect(capsuleStatusSelect.value).toBe('');
		expect(capsuleTypeSelect.value).toBe('');
		expect(capsuleSerialInput.value).toBe('');
	});

	it('should have form value to be updated', async () => {
		const { getByTestId } = render(<FilterForm />);

		const capsuleStatusSelect = getByTestId('capsule-status');
		const capsuleTypeSelect = getByTestId('capsule-type');
		const capsuleSerialInput = getByTestId('serial-id');

		await act(async () => {
			fireEvent.change(capsuleStatusSelect, { target: { value: 'active' } });
			fireEvent.change(capsuleTypeSelect, { target: { value: 'Dragon 1.0' } });
			fireEvent.change(capsuleSerialInput, { target: { value: 'C101' } });
		});

		expect(capsuleStatusSelect.value).toBe('active');
		expect(capsuleTypeSelect.value).toBe('Dragon 1.0');
		expect(capsuleSerialInput.value).toBe('C101');
	});

	it('should have form value to be updated and reset', async () => {
		const { getByTestId } = render(<FilterForm />);

		const capsuleStatusSelect = getByTestId('capsule-status');
		const capsuleTypeSelect = getByTestId('capsule-type');
		const capsuleSerialInput = getByTestId('serial-id');
		const resetButton = getByTestId('clear-filters');

		await act(async () => {
			fireEvent.change(capsuleStatusSelect, { target: { value: 'active' } });
			fireEvent.change(capsuleTypeSelect, { target: { value: 'Dragon 1.0' } });
			fireEvent.change(capsuleSerialInput, { target: { value: 'C101' } });
			fireEvent.click(resetButton);
		});

		expect(capsuleStatusSelect.value).toBe('');
		expect(capsuleTypeSelect.value).toBe('');
		expect(capsuleSerialInput.value).toBe('');
	});
});
