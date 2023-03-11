/**
 * Function to convert a number to the International Currency System
 *
 * @param {string|number} num Number to convert
 * @returns {string} Converted number
 */
const convertToInternationalCurrencySystem = (num) => {
	// Nine Zeroes for Billions
	const units = ['M', 'B', 'T', 'Q'];
	// eslint-disable-next-line no-loss-of-precision
	const unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
	const r = unit % 3;
	const x = Math.abs(Number(num)) / Number(`1.0e+${unit - r}`).toFixed(2);
	return `${x.toFixed(2)} ${units[Math.floor(unit / 3) - 2]}`;
};

export default convertToInternationalCurrencySystem;
