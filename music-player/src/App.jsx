import { useState } from 'react'
import { fetchMusicData } from './services/deezerService'
import Homepage from './components/Homepage'
import SearchBar from './components/SearchBar'
import TrackCard from './components/TrackCard'
import MusicPlayer from './components/MusicPlayer'

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      const data = await fetchMusicData(query);
      setTracks(data.data);
      setError(null);
    } catch (e) {
      setError('Could not fetch music data. Please try again.');
    }
  };

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="font-sans text-white ">
      {tracks.length === 0 ? (
        <Homepage onSearch={handleSearch} />
      ) : (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Search Results</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} onPlay={handlePlay} />
            ))}
          </div>
          {currentTrack && (
            <div className="mt-6">
              <MusicPlayer currentTrack={currentTrack} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App
