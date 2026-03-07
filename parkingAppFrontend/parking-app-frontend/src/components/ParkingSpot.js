import React from 'react';

const ParkingSpot = ({ spot, onSpotClick  }) => {
  // Na základe toho, či je miesto obsadené, dynamicky meníme farbu a kurzor
  const spotClasses = spot.isOccupied
    ? 'bg-red-500 cursor-not-allowed'
    : 'bg-green-500 hover:bg-green-600 cursor-pointer';

  return (
    <div
      onClick={() => onSpotClick(spot.id)}
      className={`w-24 h-32 border-2 border-gray-700 rounded-lg flex flex-col justify-center items-center text-white font-bold text-lg transition-colors ${spotClasses}`}
    >
      <span>{spot.id}</span>
      <span className="text-sm mt-1">{spot.isOccupied ? 'Obsadené' : 'Voľné'}</span>
    </div>
  );
};

export default ParkingSpot;