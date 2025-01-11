import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { fetchMusicData } from './services/deezerService';
import Homepage from './components/Homepage';
import SearchBar from './components/SearchBar';
import TrackCard from './components/TrackCard';
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMusicData(query);
      setTracks(data.data);
      setError(null);
    } catch (e) {
      setError('Could not fetch music data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  // Sample data for Chris Brown's "11:11" album
  const trackDetails = {
    trackTitle: 'Angel Numbers / Ten Toes',
    artistName: 'Chris Brown',
    albumCover: 'https://api.deezer.com/album/510479581/image',
    albumName: '11:11',
  };

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        {/* Navigation */}
        <nav className="p-4 bg-gray-800 flex justify-around">
          <Link to="/" className="text-white hover:underline">
            Homepage
          </Link>
          <Link to="/search" className="text-white hover:underline">
            Search
          </Link>
          <Link to="/track" className="text-white hover:underline">
            Track Card
          </Link>
          <Link to="/player" className="text-white hover:underline">
            Music Player
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<Homepage />} />

          {/* SearchBar Route */}
          <Route
            path="/search"
            element={
              <div className="px-4 py-8">
                <h2 className="text-center text-black text-3xl font-bold mb-6">
                  Search for tracks, artists, albums...
                </h2>
                <div className="flex justify-center">
                  <SearchBar onSearch={handleSearch} />
                </div>
                {loading && <p className="text-center text-gray-400 mt-4">Loading...</p>}
                {error && <p className="text-center text-red-600 mt-4">{error}</p>}
                {tracks.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                    {tracks.map((track) => (
                      <TrackCard
                        key={track.id}
                        trackTitle={track.title}
                        artistName={track.artist.name}
                        albumCover={track.album.cover_medium}
                        albumName={track.album.title}
                        onPlay={() => handlePlay(track)}
                      />
                    ))}
                  </div>
                )}
              </div>
            }
          />

          {/* TrackCard Route */}
          <Route
            path="/track"
            element={
              <div className="px-4 py-8">
                <h2 className="text-center text-black text-3xl font-bold mb-6">Featured Track</h2>
                <div className="flex justify-center">
                  <TrackCard
                    trackTitle={trackDetails.trackTitle}
                    artistName={trackDetails.artistName}
                    albumCover={trackDetails.albumCover}
                    albumName={trackDetails.albumName}
                  />
                </div>
              </div>
            }
          />

          {/* MusicPlayer Route */}
          <Route
            path="/player"
            element={
              <div className="px-4 py-8">
                <h2 className="text-center text-black text-3xl font-bold mb-6">Now Playing</h2>
                <MusicPlayer track={currentTrack} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;