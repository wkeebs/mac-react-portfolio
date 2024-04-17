import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-yellow-400 p-4 border-b-2 border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <button className="hover:text-white p-2 rounded-lg">
            My Portfolio
          </button>
        </div>
        <div>
          <button className="hover:text-white px-3">Experience</button>
          <button className="hover:text-white px-3">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
