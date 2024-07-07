import React, { useState, useEffect } from 'react'

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(false);
    const themetoggle = () => {
        setTheme((prevMode) => !prevMode);
    };
    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkmode") === "true";
        setTheme(isDarkMode);
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme);
        localStorage.setItem("darkmode", theme);
    }, [theme]);


    return (
        <div className="px-4 rounded-md text-2xl cursor-pointer"
            onClick={themetoggle}>
            {theme ? (
                <span className="material-symbols-outlined text-white">
                    light_mode
                </span>
            ) : (
                <span className="material-symbols-outlined text-black">
                    dark_mode
                </span>
            )}
        </div>
    );
};

export default ThemeSwitch
