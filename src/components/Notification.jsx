import React from "react";
import women from '../assets/images/women.png';


const notifications = [	
    {
        name: "Thushanka Pramuditha",
        description: "added a comment to your post",
        image:women,
    },

    {
        name:"Pramukha Thenuwara",
        description:"liked your post",
        image:women,
    },

    {
        name:"Dinusha Tharuka",
        description:"added a comment to your post",
        image:women,
    },

];

const Notification = () => {
  return (
    <div className=" bg-white mt-6 ml-2">
      <h1 className="text-xl font-bold mb-4 text-center">Notifications</h1>

      <div className="flex flex-col bg-white">
        {notifications.map((notification, index) => (
            <div className="flex flex-col mr-6 w-full max-w-md rounded-lg pr-4" key={index}>
                <div className="flex items-center w-full h-auto bg-gray-100 rounded-lg justify-between m-2 p-2">
                <div className="flex items-center">
                    <div className="ml-4 w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="ml-3 w-12 h-12 border-2 border-yellow-400 rounded-full overflow-hidden flex-shrink-0">
                <img src={women} alt="StudyHive" className="w-full h-full object-cover rounded-full" />
              </div>
                    <div className="flex flex-col ml-2">
                    <p className="text-sm sm:text-sm font-semibold">
                        {notification.name} <span className="font-normal">{notification.description}</span>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            ))}



       

      </div>
    </div>
  );
};

export default Notification;
