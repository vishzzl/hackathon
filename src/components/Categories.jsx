import React  from 'react';
import { useTheme } from '../Themecontext';

const getThemeClass = (theme, baseClass) => {
    return `${theme === 'dark' ? 'dark-theme' : 'light-theme'} ${baseClass}`;
};

const Categories = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={getThemeClass(theme, 'frame-2609248')}>
         <div className='flex p-10'>
            <div className='flex-1 ms-10 items-center mr-80' >
                <h2 className='text3'>Diverse Hackathon <br/> Categories</h2>
                <div className='line'></div>
                <p className='text2 mt-10'>View All</p>
            </div>
            <div className='relative flex  justify-between'>
                <img src='../assets/vectors/subtract.svg' typeof='svg' alt='subtract' className='relative'/>
                <img src='../assets/images/download_11.png' alt='add' className='absolute bottom-0 right-20  object-cover w-full h-full'/>
            </div>
         </div>
        </div>
    );
};

export default Categories;