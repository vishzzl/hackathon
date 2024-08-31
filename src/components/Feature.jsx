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
                <div className='flex justify-between'> 
                    <h2 className='text1 m-10'> 
                    Upcoming Hackathons
                    </h2>
                    <div className='flex float-right items-center '>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="noun-arrow-3134192 2">
                        <path id="Vector" d="M25.5272 15.0214L18.9435 9.42619C18.7953 9.2937 18.6175 9.18774 18.4204 9.11457C18.2233 9.04139 18.011 9.00248 17.7959 9.00011C17.5809 8.99775 17.3674 9.03198 17.1682 9.1008C16.9689 9.16962 16.7879 9.27163 16.6357 9.40081C16.4836 9.53 16.3634 9.68376 16.2823 9.85303C16.2011 10.0223 16.1606 10.2037 16.1632 10.3864C16.1658 10.5692 16.2114 10.7497 16.2974 10.9172C16.3833 11.0848 16.5078 11.2361 16.6636 11.3621L20.5554 14.6645H7.61194C7.18442 14.6645 6.77442 14.8088 6.47213 15.0657C6.16983 15.3226 6 15.6711 6 16.0344C6 16.3977 6.16983 16.7462 6.47213 17.0031C6.77442 17.26 7.18442 17.4043 7.61194 17.4043H20.5194L16.6636 20.6864C16.3739 20.9454 16.2148 21.2904 16.2202 21.6478C16.2256 22.0052 16.3952 22.3466 16.6927 22.5992C16.9902 22.8518 17.3921 22.9956 17.8126 22.9999C18.2331 23.0042 18.6389 22.8687 18.9435 22.6223L25.5272 17.027C25.6774 16.9001 25.7965 16.7491 25.8775 16.5828C25.9585 16.4165 25.9999 16.2382 25.9992 16.0582C26.0003 16.0469 26.0003 16.0355 25.9992 16.0242C26.0002 16.0129 26.0002 16.0015 25.9992 15.9902C25.9991 15.6269 25.8293 15.2785 25.5272 15.0214Z" fill="black"/>
                        </g>
                        </svg>
                        <p className='text2 me-5'>

                        View all
                        </p>
                    </div>
                </div>
                <HackathonCard/>
            </div>
            <div className='flex-row mt-10'>
                <div className='flex justify-between'> 
                    <h2 className='text1 m-10'> 
                    Coding Hackathons
                    </h2>
                    <div className='flex  items-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="noun-arrow-3134192 2">
                        <path id="Vector" d="M25.5272 15.0214L18.9435 9.42619C18.7953 9.2937 18.6175 9.18774 18.4204 9.11457C18.2233 9.04139 18.011 9.00248 17.7959 9.00011C17.5809 8.99775 17.3674 9.03198 17.1682 9.1008C16.9689 9.16962 16.7879 9.27163 16.6357 9.40081C16.4836 9.53 16.3634 9.68376 16.2823 9.85303C16.2011 10.0223 16.1606 10.2037 16.1632 10.3864C16.1658 10.5692 16.2114 10.7497 16.2974 10.9172C16.3833 11.0848 16.5078 11.2361 16.6636 11.3621L20.5554 14.6645H7.61194C7.18442 14.6645 6.77442 14.8088 6.47213 15.0657C6.16983 15.3226 6 15.6711 6 16.0344C6 16.3977 6.16983 16.7462 6.47213 17.0031C6.77442 17.26 7.18442 17.4043 7.61194 17.4043H20.5194L16.6636 20.6864C16.3739 20.9454 16.2148 21.2904 16.2202 21.6478C16.2256 22.0052 16.3952 22.3466 16.6927 22.5992C16.9902 22.8518 17.3921 22.9956 17.8126 22.9999C18.2331 23.0042 18.6389 22.8687 18.9435 22.6223L25.5272 17.027C25.6774 16.9001 25.7965 16.7491 25.8775 16.5828C25.9585 16.4165 25.9999 16.2382 25.9992 16.0582C26.0003 16.0469 26.0003 16.0355 25.9992 16.0242C26.0002 16.0129 26.0002 16.0015 25.9992 15.9902C25.9991 15.6269 25.8293 15.2785 25.5272 15.0214Z" fill="black"/>
                        </g>
                        </svg>
                        <p className='text2 me-5'>

                        View all
                        </p>
                    </div>
                </div>
                <HackathonCard/>
            </div>
        </div>
    );
};

export default Feature;