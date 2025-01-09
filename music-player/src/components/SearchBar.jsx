import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { fetchMusicData } from '../services/deezerService';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        type="text"
        placeholder="Search for tracks, artists, albums..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded px-4 py-2 flex-1 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 items-center"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
