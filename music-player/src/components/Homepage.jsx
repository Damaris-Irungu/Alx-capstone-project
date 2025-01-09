import React from 'react';
import { Link } from "react-router-dom";
import { fetchMusicData } from '../services/deezerService';

const Homepage = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center justify-center items-center text-white "
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/07/54/47/49/360_F_754474987_q7U248KiWeD8Aj4ycAv68lufp7vO04h7.jpg')",
      }}
    >
        {/* Banner Section */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white flex flex-col justify-center items-center">Welcome to Musiquey</h1>
      <p className="text-lg md:text-xl text-white mb-6">
            Search, play, and enjoy music from your favorite artists and albums.
          </p>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-lg flex gap-2 items-center">
            <input
              type="text"
              name="search"
              placeholder="Search for songs, artists, albums..."
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
              Search
            </button>
          </form>


          </div>
      </div>
  );
};

export default Homepage;
