import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchMusicData } from "../services/deezerService";

const MusicPlayer = () => {
  // Static album details for Chris Brown's 11:11
  const albumDetails = {
    trackTitle: "Angel Numbers \/ Ten Toes",
    artistName: "Chris Brown",
    albumCover:
      "https:\/\/api.deezer.com\/album\/510479581\/image",
    albumName: "11:11",
    previewUrl:"https:\/\/www.deezer.com\/track\/2534909521",
    
  };

  // State for playback
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(albumDetails.previewUrl);

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const stopPlayback = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Album Cover */}
      <div className="flex justify-center">
        <img
          src={albumDetails.albumCover}
          alt={`${albumDetails.albumName} Cover`}
          className="w-48 h-48 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Track Details */}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">{albumDetails.trackTitle}</h2>
        <p className="text-gray-400">By: {albumDetails.artistName}</p>
        <p className="text-gray-400">Album: {albumDetails.albumName}</p>
      </div>

      {/* Playback Controls */}
      <div className="mt-6 flex justify-center items-center space-x-4">
        <button
          onClick={togglePlayPause}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-semibold"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={stopPlayback}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;