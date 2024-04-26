import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-yellow-400 p-4 border-b-2 border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Exercise 1: Turn this into a functional Navbar with routing. 
            Hint** Use the <Link> component from react-router-dom
        */
        }

        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-white p-2 rounded-lg">My Portfolio</Link>
        </div>
        <div>
          <Link to="/blog" className="hover:text-white px-3">Blog</Link>
          <Link to="/experience" className="hover:text-white px-3">Experience</Link>
          <Link to="/contact" className="hover:text-white px-3">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
