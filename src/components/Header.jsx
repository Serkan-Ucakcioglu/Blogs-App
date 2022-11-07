import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-violet-600 h-20 p-5 flex justify-between items-center">
      <h1 className="text-white text-2xl font-extrabold">Blog Apps</h1>
      <div className="flex mr-6">
        <Link to="/" className="text-white text-xl font-extrabold">
          Home
        </Link>
        <Link
          to="new-post"
          className="ml-4 mr-2 text-xl text-white font-extrabold"
        >
          Post
        </Link>
      </div>
    </header>
  );
}

export default Header;
