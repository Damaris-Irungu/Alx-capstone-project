import React from 'react';

const TrackCard = () => {
  const trackDetails = {
    trackTitle: "Angel Numbers / Ten Toes",
    artistName: "Chris Brown",
    albumCover:
      "Album Cover 1.jpg",
    albumName: "11:11",
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden text-white max-w-xs">
      {/* Album Cover */}
      <img
        src={trackDetails.albumCover}
        alt={`${trackDetails.albumName} Cover`}
        className="w-full h-64 object-cover"
      />
      {/* Track Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold">{trackDetails.trackTitle}</h3>
        <p className="text-gray-400">By: {trackDetails.artistName}</p>
        <p className="text-gray-400">Album: {trackDetails.albumName}</p>
        {/* Play Button */}
        <div className="mt-4">
          <a
            href={trackDetails.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Play Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;