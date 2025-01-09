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
      className="h-screen w-full bg-cover bg-center justify-center items-center text-white "
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/011/913/922/small_2x/abstract-pink-watercolor-background-pastel-soft-water-color-pattern-vector.jpg')",
      }}
    >
        {/* Banner Section */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white flex flex-col justify-center items-center">Welcome to Musiquey</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Search, play, and enjoy music from your favorite artists and albums.
          </p>

          </div>
      </div>
  );
};

export default Homepage;
