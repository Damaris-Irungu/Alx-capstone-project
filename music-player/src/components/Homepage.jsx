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
    
          </div>
      </div>
  );
};

export default Homepage;
