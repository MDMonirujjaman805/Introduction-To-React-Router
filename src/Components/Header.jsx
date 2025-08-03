// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Header = () => {
//   return (
//     <div className="w-10/12 mx-auto mt-20 bg-gray-200 px-2">
//       <h1 className="text-center text-4xl font-bold py-3 ">
//         Wellcome to Out Website.
//       </h1>
//       <div className="flex justify-between items-center  py-2 ">
//         <Link to="./logo" className="text-2xl font-bold cursor-pointer">
//           Monir
//         </Link>
//         <div className="space-x-5 cursor-pointer font-bold">
//           <div className="sm:visible md:hidden">

//           <GiHamburgerMenu />
//           </div>
//           <Link to="./home">Home</Link>
//           <Link to="./shop">Shop</Link>
//           <Link to="./posts">Posts</Link>
//           <Link to="./users">Users</Link>
//           <Link to="./about">About Us</Link>
//           <Link to="./contact">Contact me</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/posts", label: "Posts" },
    { to: "/users", label: "Users" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Me" },
  ];

  return (
    <div className="w-10/12 mx-auto mt-10 bg-gray-100 px-4 rounded shadow-md">
      <h1 className="text-center text-4xl font-bold py-4 text-gray-800">
        Welcome to Our Website.
      </h1>

      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Monir
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-semibold">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger for Small Screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 pb-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-gray-700 hover:text-blue-500 font-medium px-2"
              onClick={() => setIsOpen(false)} // auto close on link click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
