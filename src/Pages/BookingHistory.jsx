import React, { useContext } from "react";
import MyContext from "../Component/Context";
import { MdDelete } from "react-icons/md";
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

      <div className="grid gap-6">
        {bookedPlaces?.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-between gap-4 ">
              <div>
                <p>
                  Location ={">>"}
                  <span className="font-bold">{item.name}</span>
                  
                </p>
                <p>
                  CheckIn  ={">>"}
                  <span className="font-bold">{checkIn}</span>
                  
                </p>
                <p>
                  CheckOut   ={">>"}
                  <span className="font-bold">{   checkOut}</span>
                  
                </p>
                <MdDelete
                  className="text-red-600 font-bold cursor-pointer"
                  onClick={() => {
                    removeFromBookedPlaces(item);
                  }}
                />
              </div>
              <div>
                <img className="w-20 h-30 rounded" src={item.gridImg1} alt="" />
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
