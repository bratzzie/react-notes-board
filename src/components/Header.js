import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 shadow h-12 w-full mb-4 flex justify-center items-center">
      <Link
        to="/"
        className="text-gray-50 font-bold text-lg uppercase tracking-wide"
      >
        Your Notes
      </Link>
    </div>
  );
};

export default Header;
