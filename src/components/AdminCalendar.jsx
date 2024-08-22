import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import SideBarnNavbar from './SideBarnNavbar';
import AdminEvent from './AdminEvent';
import './MyCalendar.css';
import AdminSidebar from './AdminSidebar';

const localizer = momentLocalizer(moment);

const AdminCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Annual Conference',
      start: new Date(),
      end: new Date(),
      image: 'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=600', // Image for Annual Conference
      time: 'Today 07:19 AM',
      location: '56 Davion Mission Suite 157',
      organizer: 'Meaghanberg',
      attendees: [1, 2, 3, 4],
    },
    {
      title: 'Quarterly Review',
      start: new Date(moment().add(1, 'days')),
      end: new Date(moment().add(1, 'days')),
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600', // Image for Quarterly Review
      time: '16 October 2024 at 5:00 PM',
      location: '853 Moore Flats Suite 158',
      organizer: 'Sweden',
      attendees: [5, 6, 7, 8],
    },
    {
        title: 'Team Building Retreat',
        start: new Date(moment().add(2, 'days')),
        end: new Date(moment().add(2, 'days')),
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600', // Updated image for team building
        time: '20-22 October 2024 at 8:00 PM',
        location: '646 Walter Road Apt. 571',
        organizer: 'Turks and Caicos Islands',
        attendees: [9, 10, 11, 12],
    },
  ]);

  return (
    <div>
      <AdminSidebar />
      <div className="ml-[257px]">
        <div className="flex flex-col md:flex-row min-h-screen p-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="bg-white p-4 rounded-lg shadow-md w-full ml-10 md:w-auto md:h-[700px]">
              {events.map((event, index) => (
                <AdminEvent key={index} event={event} />
              ))}
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-white p-4 rounded-lg shadow-md w-full">
              <h1 className="text-2xl font-bold mb-4">Admin Calendar</h1>
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
    </div>
  );
};

export default AdminCalendar;
