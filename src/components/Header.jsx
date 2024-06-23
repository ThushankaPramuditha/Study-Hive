import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="bg-yellow-200 text-white py-4">
      <div className="container mx-auto flex justify-between items-center mt-4">
        <div className="logo w-20 h-20">
          <img src={logo} alt="StudyHive" className="w-full h-auto ml-5" />
        </div>
        <nav className="space-x-9 mr-10">  
          <Link to="/" className="text-customGray hover:text-gray-300">Home</Link>
          <Link to="/careers" className="text-customGray hover:text-gray-300">Careers</Link>
          <Link to="/content" className="text-customGray hover:text-gray-300">About Us</Link>
          <Link to="/service" className="text-customGray hover:text-gray-300">Services</Link>
          <Link to="/testimonial" className="text-customGray hover:text-gray-300">Testimonial</Link>
          <Link to="/login"
            className="bg-white hover:bg-orange-400 text-customGray py-2 px-4 rounded-lg"
          >Login</Link>
          <Link to="/signup"
            className="bg-amber-400 hover:bg-orange-400 text-customGray py-2 px-4 rounded-lg"
          >Sign Up</Link>

        </nav>
      </div>
    </header>
  );
};


export default Header;
