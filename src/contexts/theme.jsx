import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const savedTheme = localStorage.getItem('theme') ?? 'light';

const getReverseTheme = (theme) => (theme === 'light' ? 'dark' : 'light');

/**
 * Theme Context.
 */
const ThemeContext = createContext({
	theme: savedTheme,
	toggleTheme: () => {},
});

/**
 * Theme Provider.
 *
 * @param {JSX} param Children
 *
 * @returns {JSX} Provider
 */
export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(savedTheme);

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.documentElement.classList.remove(getReverseTheme(theme));
		document.documentElement.classList.add(theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => getReverseTheme(prevTheme));
	};

	const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Theme Hook.
 *
 * @returns {Object} Context
 */
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ThemeContext;
