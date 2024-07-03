import React from 'react';

const EventCard = ({ event }) => {
  return (

    
    <div className="flex items-start bg-white p-4 mb-4 rounded-lg w-[263px] h-auto shadow-lg border border-gray-200">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-500">{event.time}</p>
        <p className="text-sm text-gray-500">{event.location}</p>
        <p className="text-sm text-gray-500">{event.organizer}</p>
        <div className="flex mt-2">
          {event.attendees.map((attendee, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 ml-[-0.75rem] border-2 border-white"
              style={{ zIndex: index }}
            >
                <img src={`https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'}${attendee}.jpg`} alt="Attendee" className="w-full h-full object-cover rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

const App = () => {
  const event1 = {
    image: 'https://images.pexels.com/photos/6045110/pexels-photo-6045110.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Design Conference',
    time: 'Today 07:19 AM',
    location: '56 Davion Mission Suite 157',
    organizer: 'Meaghanberg',
    attendees: [1, 2, 3, 4],
  };

  const event2 = {
    image: 'https://images.pexels.com/photos/7780807/pexels-photo-7780807.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Weekend Festival',
    time: '16 October 2019 at 5:00 PM',
    location: '853 Moore Flats Suite 158',
    organizer: 'Sweden',
    attendees: [5, 6, 7, 8],
  };

  const event3 = {  
    image: 'https://images.pexels.com/photos/20812279/pexels-photo-20812279/free-photo-of-gathering-of-people-in-costumes-holding-sticks.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Glastonbury Festival',
    time: '20-22 October 2019 at 8:00 PM',
    location: '646 Walter Road Apt. 571',
    organizer: 'Turks and Caicos Islands',
    attendees: [9, 10, 11, 12],
  };

  

  return (

    <div className=" bg-white-100 flex flex-col items-start justify-start ml-52 p-4">
       <div className="ml-[50px] mb-2">
        <button className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded">
           + Add New Event 
        </button>
        <h1 className="text-2xl font-bold mb-1">You are going to</h1>
        </div>
      <EventCard event={event1} />
      <EventCard event={event2} />
      <EventCard event={event3} />
     
    </div>
  );
};

export default App;
