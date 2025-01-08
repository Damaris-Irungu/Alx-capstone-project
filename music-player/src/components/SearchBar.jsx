import React, { useState } from 'react';
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
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Search for tracks, artists, albums..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded px-4 py-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
