import React from 'react';

const AdminEvent = ({ event }) => {
  return (
    <div className="flex items-start bg-white p-4 mb-4 rounded-lg w-[263px] h-auto shadow-lg border border-gray-200">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-full"
        />
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
              <img
                src={`https://randomuser.me/api/portraits/thumb/men/${attendee}.jpg`}
                alt="Attendee"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminEvent;
