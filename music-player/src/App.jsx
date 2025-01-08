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

  // Sample data for Chris Brown's "11:11" album
  const trackDetails = {
    trackTitle: "11:11",
    artistName: "Chris Brown",
    albumCover:
      "https:\/\/api.deezer.com\/album\/510479581\/image",
    albumName: "11:11",
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Homepage Section */}
      <header>
        <Homepage />
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 space-y-8">
        {/* TrackCard Section */}
        <section>
          <h2 className="text-center text-3xl font-bold mb-6">Featured Track</h2>
          <div className="flex justify-center">
            <TrackCard
              trackTitle={trackDetails.trackTitle}
              artistName={trackDetails.artistName}
              albumCover={trackDetails.albumCover}
              albumName={trackDetails.albumName}
            />
          </div>
        </section>

        {/* MusicPlayer Section */}
        <section>
          <h2 className="text-center text-3xl font-bold mb-6">Now Playing</h2>
          <MusicPlayer />
        </section>
      </main>
    </div>
  );
};

export default App
