import React from 'react';
import { useTheme } from '../Themecontext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav
            className={`fixed top-0 left-0 w-full p-4  ${theme === 'dark' ? ' bg-slate-900' : 'bg-white'} shadow-lg z-50 relative`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
                    <h1 className="text-xl font-bold">My Website</h1>
                </div>
                <div className="flex gap-4">
                    <a href="#" className={`px-4 py-2 ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Section 1</a>
                    <a href="#" className={`px-4 py-2 ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Section 2</a>
                    <a href="#" className={`px-4 py-2 ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Section 3</a>
                    <a href="#" className={`px-4 py-2 ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}>Section 4</a>
                </div>
                <div>
                    <button
                        className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? 'Dark' : 'Light'} Theme
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
