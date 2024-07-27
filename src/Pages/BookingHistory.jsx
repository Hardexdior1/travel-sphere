import React, { useContext } from "react";
import MyContext from "../Component/Context";
import { MdDelete } from "react-icons/md";
import { FaArrowRight } from 'react-icons/fa';

const BookingHistory = () => {
  const value = useContext(MyContext);
  const {
    checkIn,
    setCheckIn,
    checkOut,
    bookedPlaces,
    setBookedPlaces,
    removeFromBookedPlaces,
  } = value;
  console.log(bookedPlaces);
  console.log(value);

  return (
    <div className="mx-5">
        <div className="p-5 md:px-10 py-5 max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg  shadow-md">
      <center className="py-5">
        <p className="font-semibold">Booking history </p>
        <div className="h-2 w-20 bg-blue-400 inline-block"></div>
      </center>

      {bookedPlaces.length == 0 && (
        <div className="mt-20 flex items-center justify-center">
          <p> you have no booking history.. </p>
        </div>
      )}

      <div className="flex flex-col gap-6">
        {bookedPlaces?.map((item, index) => {
          return (
            <div key={index} className="grid gap-3 border p-2 rounded md:flex items-center justify-between gap-4 ">
              <div className="text-sm order-2 md:order-1">
                <p className="flex items-center gap-3 ">
                  Location <FaArrowRight />
                  <span className="font-semibold">{item.name}</span>
                </p>
                <p className="flex items-center gap-3 " >
                  CheckIn  <FaArrowRight /> 
                  <span className="font-semibold">{checkIn}</span>
                  
                </p>
                <p className="flex items-center gap-3 ">
                  CheckOut   <FaArrowRight />
                  <span className="font-semibold">{   checkOut}</span>
                  
                </p>

              
               
              </div>
              <div>
                <img className="rounded md:w-40 rounded" src={item.gridImg1} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default BookingHistory;
