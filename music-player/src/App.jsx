import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { fetchMusicData } from './services/deezerService'
import Homepage from './components/Homepage'
import SearchBar from './components/SearchBar'
import TrackCard from './components/TrackCard'
import MusicPlayer from './components/MusicPlayer'


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
    trackTitle: 'Angel Numbers \/ Ten Toes, ',
    artistName: 'Chris Brown',
    albumCover: 'https://api.deezer.com/album/510479581/image',
    albumName: '11:11',
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Homepage Section */}
      <header>
        <Homepage />
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 space-y-8"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/011/913/922/small_2x/abstract-pink-watercolor-background-pastel-soft-water-color-pattern-vector.jpg')",
      }}
      >
        {/* SearchBar Section */}
        <section>
          <h2 className="text-center text-black text-3xl font-bold mb-6">Search for tracks, artists, albums...</h2>
          <div className="flex justify-center">
            <SearchBar onSearch={handleSearch} />
          </div>
          {error && <p className="text-center text-red-600 mt-4">{error}</p>}
        </section>

        {/* Tracks Listing Section */}
        <section>
          {tracks.length > 0 && (
            <>
              <h2 className="text-center text-3xl font-bold mb-6">Search Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            </>
          )}
        </section>

        {/* TrackCard Section */}
        <section>
          <h2 className="text-center text-black text-3xl font-bold mb-6">Featured Track</h2>
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
          <h2 className="text-center text-black text-3xl font-bold mb-6">Now Playing</h2>
          <MusicPlayer track={currentTrack} />
        </section>
      </main>
    </div>
  );
};

export default App;