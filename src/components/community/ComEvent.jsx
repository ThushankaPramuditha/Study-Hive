import React from "react";
import TableRow from "./TableRow";

function ComEvent() {
  const users = [
    { name: "John Doe", joinDate: "2021-01-15", posts: 34 },
    { name: "Jane Smith", joinDate: "2020-11-20", posts: 42 },
    { name: "Emily Johnson", joinDate: "2019-05-30", posts: 58 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-gray-800 font-medium">
                Name
              </th>
              <th className="px-6 py-3 text-left text-gray-800 font-medium">
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-gray-800 font-medium">
                Posts
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <TableRow
                key={index}
                name={user.name}
                joinDate={user.joinDate}
                posts={user.posts}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComEvent;
