import React, { useState } from 'react';
import SVGComponent from './Svgcomponent';
import HackathonCard from './HackathonCards';

const items = [
    {
        title: 'Item 1',
        backgroundColor: '#8638E5',
        backgroundImage: '../assets/images/background1.png',
        image: '../assets/images/redgirl.png',
        buttoncolor: 'bg-blue-500'
    },
    {
        title: 'Item 2',
        backgroundColor: ' conic-gradient(  rgba(206, 229, 255, 1) 0%, rgba(206, 229, 255, 1) 50%, rgba(56, 136, 229, 0.9) 100% )',
        backgroundImage: '../assets/images/background2.png',
        image: '../assets/images/item2.png',
        buttoncolor: 'bg-red-500'
        
    }
];

const Feature = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 2 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 2 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className=' justify-center items-center m-auto bg-gradient-to-b from-blue-100 to-yellow-100'>

            <SVGComponent />

            <div className='relative w-full mt-10'>
                <div className='flex justify-between items-center mb-4 px-4'>
                    <div className='text-gray-800 font-bold text-xl flex items-center'>
                        <span>Featured</span>
                        <span className='ml-2 text-gray-600'>&rarr;</span>
                    </div>
                </div>

                <div className='relative overflow-hidden mx-10'>
                    <div className='flex p-10'>
                    {items.map((item, index) => (
                                    <div key={index} className='rounded-lg shadow-lg p-6 mx-10 card1 overflow-hidden' style={{ width: '520px', height: '226px', background: item.backgroundColor }}>
                                        <div className='flex'>
                                            <div className='flex-1'>
                                                <img src={item.image} alt="Descriptive text"  className='m-0 flex-start w-full h-full object-cover transform scale-x-[-1]' /> 
                                            </div>
                                            <div className='flex-1'>
                                                <h2 className='text-xl font-bold mb-4'>Problem of the day</h2>
                                                <p className='font-bold text-lg'>Code daily and improve your skills</p>
                                                <button className={`text-white px-4 py-2 rounded-full mt-4 ${item.buttoncolor}`}>Apply for hackathon</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg'
                        aria-label='Previous'
                    >
                        &#10094;
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg'
                        aria-label='Next'
                    >
                        &#10095;
                    </button>
                </div>
            </div>
            <div className='flex mt-10'>
                <div className='flex-1 m-10 my-auto'>
                    <h2 className='text1'>Experience the power of AI firsthand at the Smart AI Hackathon</h2>
                    <button className='text-white px-4 py-2 rounded mt-4 bg-purple-500'>Join now</button>
                </div>
                <div className='flex-1 items-end'>
                    <img src="../assets/vectors/box.svg" className='float-right' alt="SVG File" />
                </div>
            </div>
            <div className='flex-row mt-10'>
                <h2 className='text1 m-10'> 
                Upcoming Hackathons
                </h2>
                <HackathonCard/>
            </div>
        </div>
    );
};

export default Feature;