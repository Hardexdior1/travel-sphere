import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (date && destination) {
      navigate(`/search?date=${date}&destination=${destination}`);
    }
  };

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Bus Booking</h1>
      <div className="mb-4">
        <label className="block mb-2">Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
      </div>
      <button onClick={handleSearch} className="bg-blue-500 text-white py-2 px-4 rounded">
        Search Buses
      </button>
    </div>
  );
};

export default SearchPage;