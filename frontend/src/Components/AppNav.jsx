import React from "react";
import { FaVideo, FaImages, FaFilm, FaCameraRetro } from "react-icons/fa";

function AppNav() {
  return (
    <div>
      <nav className=" p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-evenly space-x-4">
            <div className="text-white text-2xl font-semibold">
              <span>Insta</span>
              <span className="text-blue-500">Down</span>
            </div>
          </div>

          {/* Menu items */}
          <div className="flex space-x-6">
            {/* Reels */}
            <a href="#reels" className="text-white text-center">
              <FaFilm className="mx-auto text-3xl" />
              <span className="block mt-2">Reels</span>
            </a>

            {/* Posts */}
            <a href="#posts" className="text-white text-center">
              <FaImages className="mx-auto text-3xl" />
              <span className="block mt-2">Posts</span>
            </a>

            {/* Videos */}
            <a href="#videos" className="text-white text-center">
              <FaVideo className="mx-auto text-3xl" />
              <span className="block mt-2">Videos</span>
            </a>

            {/* Stories */}
            <a href="#stories" className="text-white text-center">
              <FaCameraRetro className="mx-auto text-3xl" />
              <span className="block mt-2">Stories</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AppNav;
