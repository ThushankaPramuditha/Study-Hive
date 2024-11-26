

  const CommunityHeader = () => {
    const ComunityName = "Helo";
    const Name = "darrk";
    const menuItems = ['Home', 'Events', 'Members'];

    return (
      <div className="flex flex-row fixed z-40 justify-between items-center bg-gray-800 text-white py-2 px-10 top-0 left-0 w-full  shadow-md">
        <div>
          <p className="text-xl font-bold">{ComunityName}</p>
        </div>
        <ul className="flex space-x-12">
          {" "}
          {menuItems.map((item) => (
            <li key={item} className="hover:text-gray-400">
              {item}
            </li>
          ))}{" "}
        </ul>
        <div className="flex items-center space-x-2">
          <img src="" alt="here is the logo" className="w-8 h-8 rounded-full" />
          <p>{Name}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        </div>
      </div>
    );
  };

  export default CommunityHeader;
