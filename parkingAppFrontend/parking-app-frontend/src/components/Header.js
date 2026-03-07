import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Parking App header</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Odhlásiť sa
        </button>
      </div>
    </header>
  );
};

export default Header;