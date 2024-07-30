import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const inquiries = [
  {
    id: 1,
    name: "Dushan Jayalath",
    email: "dushan@mail.com",
    date: "31.07.2024",
    message: "I've been having trouble with the study partner matches. I asked for someone in Biology 101, but I'm getting matched with people in different classes. Can you check if something's wrong with the matching system?",
  },
  {
    id: 2,
    name: "Puspika Silva",
    email: "puspika@mail.com",
    date: "24.07.2024",
    message: "I am unable to find my course materials on the platform. Could you please help me locate them?",
  },
  {
    id: 3,
    name: "Jeewaka Dias",
    email: "jeewaka@mail.com",
    date: "29.07.2024",
    message: "I've been facing login issues. Even after resetting my password, I can't log in.",
  },
  {
    id: 4,
    name: "Randika Alwis",
    email: "randi@mail.com",
    date: "31.07.2024",
    message: "I would like to know how to join a new study group. Can you guide me through the process?",
  },
];

const InquiryCard = ({ inquiry }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-[#FCFCFC] shadow-md rounded-lg p-4 mb-10 mr-5">
      <div className="grid grid-cols-12 items-center mb-4">
        <div className="col-span-1">
          <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
            {inquiry.name[0]}
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">{inquiry.name}</h3>
        </div>
        <div className="col-span-3">
          <p className="text-gray-600">{inquiry.email}</p>
        </div>
        <div className="col-span-2">
          <p className="text-gray-600">{inquiry.date}</p>
        </div>
        <div className="col-span-3 flex justify-end gap-12 mr-8">
          <button className="bg-[#A6B15C] text-white px-6 py-1 rounded-3xl text-[14px]">Reply</button>
          <button className="">
            <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
          </button>
        </div>
      </div>
      <hr className="mb-4" />
      {inquiry.message && (
        <>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-[#717171] text-sm mt-2"
          >
            {showDetails ? 'Show Less ▲' : 'Show inquiry details ▼'}
          </button>
          {showDetails && <p className="text-gray-700 mt-2">{inquiry.message}</p>}
        </>
      )}
    </div>
  );
};

const Inquiry = () => {
  const [filter, setFilter] = useState('filter by day');
  
  // Function to filter inquiries
  const filterInquiries = (inquiries, filter) => {
    const now = moment();
    return inquiries.filter(inquiry => {
      const inquiryDate = moment(inquiry.date, "DD.MM.YYYY");
      switch (filter) {
        case 'today':
          return inquiryDate.isSame(now, 'day');
        case 'yesterday':
          return inquiryDate.isSame(now.clone().subtract(1, 'day'), 'day');
        case 'lastWeek':
          return inquiryDate.isBetween(now.clone().subtract(7, 'days'), now, 'day', '[]');
        case 'lastMonth':
          return inquiryDate.isBetween(now.clone().subtract(1, 'month').startOf('month'), now, 'day', '[]');
        default:
          return true;
      }
    });
  };

  const filteredInquiries = filterInquiries(inquiries, filter);

  return (
    <div className='flex'>
      <AdminSidebar />
      <div className="flex-1 p-6 ml-[273px] mt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mb-4">Inquiry History</h1>
          <div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-[180px] p-2 border border-gray-300 rounded-md text-[#8B909A] mr-8"
            >
            <option value="">filter by day</option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="lastWeek">Last Week</option>
              <option value="lastMonth">Last Month</option>
            </select>
          </div>
        </div>
        {filteredInquiries.length === 0 ? (
          <p className="text-gray-600">No inquiries for this period.</p>
        ) : (
          <div>
            {filteredInquiries.map((inquiry) => (
              <InquiryCard key={inquiry.id} inquiry={inquiry} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inquiry;