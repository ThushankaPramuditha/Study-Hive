import React from "react";

const reminders = [	

    {
        name: "UCSC 19 Monthly Meeeting",
        description: "Discuss about the upcoming exams",    
    },

    {
        name:"UCSC Rotaract AGM",
        description: "Discuss about the upcoming projects",
    },

    {
        name:"IEEE UCSC AGM",
        description: "Discuss about the upcoming projects",
    },

];

const Reminders = () => {
  return (
    <div className="bg-white mt-6 ml-2">
      <h1 className="text-xl font-bold mb-4">Reminders</h1>

      <div className="flex flex-col bg-white">
        {reminders.map((reminder, index) => (
            <div className="flex flex-col mr-6 w-full max-w-md rounded-lg pr-4" key={index}>
                <div className="flex items-center w-full h-auto bg-orange-100 rounded-xl justify-between m-2 p-2">
                <div className="flex items-center">
                    <div className="flex flex-col ml-2">
                    <p className="text-sm sm:text-sm font-semibold">{reminder.name}</p>
                    <p className="font-normal text-[12px]">{reminder.description}</p>
                    </div>
                </div>
                </div>
            </div>
            ))}



       

      </div>
    </div>
  );
};


export default Reminders;
