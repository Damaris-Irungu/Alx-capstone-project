import React from 'react';
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
      className="h-full w-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('https://t4.ftcdn.net/jpg/07/54/47/49/360_F_754474987_q7U248KiWeD8Aj4ycAv68lufp7vO04h7.jpg')",
      }}
    >

        {/* Banner Section */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Welcome to Musiquey</h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Search, play, and enjoy music from your favorite artists and albums.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="w-full max-w-lg flex gap-2">
            <input
              type="text"
              name="search"
              placeholder="Search for songs, artists, albums..."
              className="flex-1 px-4 py-3 rounded-lg text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold"
            >
              Search
            </button>
          </form>
        </div>
      </div>
  );
};

export default Homepage;