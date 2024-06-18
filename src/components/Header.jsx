import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="bg-yellow-200 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-0">
        <div className="logo w-20 h-20">
          <img src={logo} alt="StudyHive" className="w-full h-auto ml-5" />
        </div>
        <button className="block md:hidden focus:outline-none">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M3 5h18a1 1 0 110 2H3a1 1 0 010-2zm0 6h18a1 1 0 110 2H3a1 1 0 010-2zm0 6h18a1 1 0 110 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <nav className="flex flex-col md:flex-row md:space-x-9 md:mr-10 md:mt-0 hidden md:block">
          <Link to="/" className="text-customGray hover:text-gray-300">Home</Link>
          <Link to="/content" className="text-customGray hover:text-gray-300">Careers</Link>
          <Link to="/blog" className="text-customGray hover:text-gray-300">Blog</Link>
          <Link to="/aboutus" className="text-customGray hover:text-gray-300">About Us</Link>
          <Link to="/login"
            className="bg-white hover:bg-orange-400 text-customGray py-2 px-4 rounded-lg mt-4 md:mt-0"
          >Login</Link>
          <Link to="/signup"
            className="bg-amber-400 hover:bg-orange-400 text-customGray py-2 px-4 rounded-lg mt-4 md:mt-0"
          >Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

