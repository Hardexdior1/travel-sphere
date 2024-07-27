import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get("date");

  const destination = queryParams.get("destination");
  const navigate = useNavigate();

  // Mock data for available buses
  const buses = [
    { id: 1, name: 'Bus A', seats: 40, date: '2024-07-09', destination: 'lagos' },
    { id: 2, name: 'Bus B', seats: 35, date: '2024-07-09', destination: 'lagos' },
    { id: 3, name: 'Bus C', seats: 30, date: '2024-07-10', destination: 'abuja' },
  ];
  const [journeyBuses,setJourneyBuses]=useState([])



  const dateAndDestination = {
    date: date,
    destination: destination,
  };

  const availableBus = buses.filter(
    (item) =>
      item.date == dateAndDestination.date &&
      item.destination == dateAndDestination.destination
  );
  setJourneyBuses(availableBus)


 if(availableBus){

 }
 else{
    console.log("not available");
 }


 const handleBooking = (busId) => {
    navigate(`/booking?busId=${busId}&date=${date}&destination=${destination}`);
  };
  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Available Buses</h1>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id} className="mb-4">
            <div className="p-4 border rounded">
              <h2 className="text-2xl font-semibold">{bus.name}</h2>
              <p>Seats: {bus.seats}</p>
              <button
                onClick={() => handleBooking(bus.id)}
                className="bg-green-500 text-white py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
