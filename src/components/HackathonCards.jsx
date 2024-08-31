import React from 'react';

const HackathonCards = () => {
    const hackathons = [
        {
            title: 'Hackathon 1',
            description: 'This is the first hackathon',
            startDate: '2022-01-01',
            endDate: '2022-01-03'
        },
        {
            title: 'Hackathon 2',
            description: 'This is the second hackathon',
            startDate: '2022-02-01',
            endDate: '2022-02-03'
        },
        {
            title: 'Hackathon 3',
            description: 'This is the third hackathon',
            startDate: '2022-03-01',
            endDate: '2022-03-03'
        },
        {
            title: 'Hackathon 4',
            description: 'This is the fourth hackathon',
            startDate: '2022-04-01',
            endDate: '2022-04-03'
        },
        {
            title: 'Hackathon 5',
            description: 'This is the fifth hackathon',
            startDate: '2022-05-01',
            endDate: '2022-05-03'
        }
       
        // Add more hackathons as needed
    ];

    return (
        <div className="flex overflow-x-auto whitespace-nowrap p-5 justify-center">
            {hackathons.map((hackathon, index) => (
                <div className="inline-block bg-white shadow-md rounded-lg p-8 m-4" key={index}>
                    <h2 className="text-2xl font-bold mb-2">{hackathon.title}</h2>
                    <p className="text-gray-700 mb-4">{hackathon.description}</p>
                    <p className="text-gray-600 mb-2">Start Date: {hackathon.startDate}</p>
                    <p className="text-gray-600 mb-4">End Date: {hackathon.endDate}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</button>
                </div>
            ))}
        </div>
    );
};

export default HackathonCards;