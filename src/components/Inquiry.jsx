import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import axios from 'axios';

const Inquiry = () => {
  const [inquiries, setInquiries] = useState([]);
  const [filter, setFilter] = useState('');

  // Fetch inquiries from the backend
  const fetchInquiries = () => {
    axios
      .get('http://localhost:8090/api/inquiries/all')
      .then((response) => {
        setInquiries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching inquiries:', error);
      });
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const filterInquiries = (inquiries, filter) => {
    const now = moment(); // Get current date/time using moment.js
    return inquiries.filter((inquiry) => {
      const inquiryDate = moment(inquiry.createdAt); // Assuming `createdAt` is the field with the date
      switch (filter) {
        case 'today':
          return inquiryDate.isSame(now, 'day'); // Check if same day as current date
        case 'yesterday':
          return inquiryDate.isSame(now.clone().subtract(1, 'day'), 'day'); // Check if it's the day before today
        case 'lastWeek':
          return inquiryDate.isBetween(now.clone().subtract(7, 'days'), now, 'day', '[]'); // Check if within the last 7 days
        case 'lastMonth':
          return inquiryDate.isBetween(
            now.clone().subtract(1, 'month').startOf('month'),
            now,
            'day',
            '[]'
          ); // Check if within the last month
        default:
          return true; // Show all if no filter is selected
      }
    });
  };

  // Filtered inquiries based on the selected filter
  const filteredInquiries = filterInquiries(inquiries, filter);

  const InquiryCard = ({ inquiry }) => {
    const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
    const [reply, setReply] = useState('');

    const handleReplySubmit = async () => {
      try {
        await axios.post(`http://localhost:8090/api/inquiries/${inquiry.id}/reply`, {
          adminReply: reply,
        });
        alert('Reply sent successfully.');
        setReply('');
        setIsReplyModalOpen(false);
        fetchInquiries(); // Refetch inquiries after reply
      } catch (error) {
        console.error('Error posting reply:', error);
        alert('Failed to send reply.');
      }
    };

    const handleDeleteReply = async () => {
      try {
        await axios.delete(`http://localhost:8090/api/inquiries/${inquiry.id}/reply`);
        alert('Reply deleted successfully.');
        setInquiries((prevInquiries) =>
          prevInquiries.map((i) =>
            i.id === inquiry.id ? { ...i, adminReply: null } : i
          )
        );
      } catch (error) {
        console.error('Error deleting reply:', error);
        alert('Failed to delete reply.');
      }
    };

    return (
      <div className="bg-[#FCFCFC] shadow-md rounded-lg p-4 mb-10 mr-5">
        <div className="grid grid-cols-12 items-center mb-4">
          <div className="col-span-1">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
              {inquiry.firstName?.[0]}
            </div>
          </div>
          <div className="col-span-3">
            <h3 className="text-lg font-semibold">
              {inquiry.firstName} {inquiry.lastName}
            </h3>
          </div>
          <div className="col-span-3">
            <p className="text-gray-600">{inquiry.title}</p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-600">{moment(inquiry.createdAt).format('DD.MM.YYYY')}</p>
          </div>
          <div className="col-span-3 flex justify-end gap-12 mr-8">
            <button
              onClick={() => setIsReplyModalOpen(true)}
              className="bg-[#A6B15C] text-white px-6 py-1 rounded-3xl text-[14px]"
            >
              Reply
            </button>
          </div>
        </div>
        <hr className="mb-4" />
        {inquiry.content && <p className="text-gray-700 mt-2">{inquiry.content}</p>}
        {inquiry.adminReply && (
          <div className="bg-gray-100 rounded-md p-3 mt-3">
            <p className="text-gray-800 font-medium">Admin Reply:</p>
            <p className="text-gray-700">{inquiry.adminReply}</p>
            <div className="flex justify-end mt-2">
              <button onClick={handleDeleteReply}>
                <FontAwesomeIcon icon={faTrash} className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </div>
        )}

        {isReplyModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
              <h2 className="text-xl font-bold mb-4 text-center">Reply Here</h2>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                rows="5"
                placeholder="Type your reply here..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-md"
                  onClick={() => setIsReplyModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#A6B15C] text-white px-6 py-2 rounded-md text-[14px]"
                  onClick={handleReplySubmit}
                >
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex">
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
              <option value="">Filter by day</option>
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
