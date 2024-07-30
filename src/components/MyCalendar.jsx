// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import SideBarnNavbar from './SideBarnNavbar'; 
// import EventCard from './Eventcard';
// import './MyCalendar.css';

// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//   const [events, setEvents] = useState([
//     {
//       title: 'Sample Event',
//       start: new Date(),
//       end: new Date(),
//     },
//   ]);

//   const event = {
//     title: 'Design Conference',
//     time: 'Today 07:19 AM',
//     location: '56 Davion Mission Suite 157',
//     organizer: 'Meaghanberg',
//     attendees: [1, 2, 3, 4],
//   };

//   return (
//     <div> 
//       <SideBarnNavbar />
//     <div className="flex min-h-screen">
//       <div className="flex flex-col md:flex-row items-start justify-between w-full p-4 space-y-4 md:space-y-0 md:space-x-4 mt-10">
//         <div className="bg-white p-4 rounded-lg shadow-md w-auto ml-[35px] h-[670px]">
//           <EventCard />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md w-[800px] ml-[140px] mt-[50px]">
//           <h1 className="text-2xl font-bold mb-4">My Calendar</h1>
//           <Calendar
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 500 }}
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default MyCalendar;


import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import SideBarnNavbar from './SideBarnNavbar'; 
import EventCard from './Eventcard';
import './MyCalendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Sample Event',
      start: new Date(),
      end: new Date(),
    },
  ]);

  const event = {
    title: 'Design Conference',
    time: 'Today 07:19 AM',
    location: '56 Davion Mission Suite 157',
    organizer: 'Meaghanberg',
    attendees: [1, 2, 3, 4],
  };

  return (
    <div>
      <SideBarnNavbar />
      <div className="flex flex-col md:flex-row min-h-screen p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-shrink-0 w-full md:w-auto">
          <div className="bg-white p-4 rounded-lg shadow-xl w-full ml-10 md:w-auto md:h-[750px] ">
            <EventCard event={event} />
          </div>
        </div>
        <div className="flex-grow">
          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <h1 className="text-2xl font-bold mb-4">My Calendar</h1>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;

