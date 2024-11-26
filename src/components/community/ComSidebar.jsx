import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ComSidebar = () => {
  const letter = "A";

  return (
    <>
      {/* Side Bar */}
      <div className="h-screen fixed w-[60px] z-20 space-y-4 p-4 flex flex-col items-center justify-center bg-gray-700 shadow-lg left-0 top-0">
        <h1 className="flex justify-center items-center mb-8 text-3xl bg-gray-500 border-r border-gray-800 rounded-md shadow-md p-4 text-white font-bold">
          {letter}
        </h1>
        <p className="flex justify-center items-center text-2xl text-white">
          <FontAwesomeIcon icon={faPlus} className="text-gray-400" />
        </p>
      </div>
    </>
  );
};

export default ComSidebar;
