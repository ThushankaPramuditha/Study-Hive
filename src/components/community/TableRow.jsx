import React from 'react';

const TableRow = ({ name, joinDate, posts }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-100">
      <td className="px-6 py-4 text-gray-900 whitespace-nowrap">{name}</td>
      <td className="px-6 py-4 text-gray-600">{joinDate}</td>
      <td className="px-6 py-4 text-gray-600">{posts}</td>
    </tr>
  );
};

export default TableRow;
