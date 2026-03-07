import React from 'react';
import ParkingSpot from './ParkingSpot';

const ParkingGrid = ({ spots, onSpotClick}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {spots.map(spot => (
        <ParkingSpot key={spot.id} spot={spot} onSpotClick={onSpotClick} />
      ))}
    </div>
  );
};

export default ParkingGrid;