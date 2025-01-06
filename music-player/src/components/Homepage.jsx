import React from 'react';

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
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('Background img.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col justify-center items-center">
        {/* Banner Section */}
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Favorite Tunes</h1>
          <p className="text-lg md:text-xl text-white-300 mb-6">
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
    </div>
  );
};

export default Homepage;