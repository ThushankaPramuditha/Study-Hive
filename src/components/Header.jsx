import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../App.css'; 


const Header = () => {
return (
<header className="bg-yellow-200 text-white py-4">
<div className="container mx-auto flex justify-between items-center mt-4">
<div className="logo w-20 h-20">
<img src={logo} alt="StudyHive" className="w-full h-auto ml-5" />
</div>
<nav className="space-x-20 mr-10">
<Link to="/" className="text-customGray hover:text-gray-300">Home</Link>
<Link to="/home" className="text-customGray hover:text-gray-300">Dashboard</Link>
<Link to="/login"
className="bg-white hover:bg-orange-400 text-customGray py-2 px-4 rounded-lg"
>Login</Link>
{/* <Link to="/"
className="bg-amber-400 hover:bg-orange-400 text-customGray py-2 px-4 rounded-lg"
>Sign Up</Link> */}
</nav>
</div>
</header>
);
};


export default Header;
