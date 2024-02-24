import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(prefersDarkMode);
    const storedDarkMode = localStorage.getItem('darkTheme');

    if (storedDarkMode === null) {
        return prefersDarkMode;
    }

    return storedDarkMode === 'true';
};

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);

    const [searchTerm, setSearchTerm] = useState('dog');

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        console.log(newDarkTheme);
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    };

    useEffect(() => {
        const body = document.querySelector('body');
        if (isDarkTheme) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    return (
        <AppContext.Provider value={{ isDarkTheme, searchTerm, toggleDarkTheme, setSearchTerm }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);
