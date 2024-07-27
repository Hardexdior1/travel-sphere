import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./Context";
import Swal from "sweetalert2";

const Hero = () => {
  // getting the empty date context
  const value = useContext(MyContext);
  const { checkIn, setCheckIn,checkOut,setCheckOut} = value;

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [location, setLocation] = useState("");

  // const formattedDate = formatDate(checkInDate);
  // console.log(formattedDate);

  const navigate = useNavigate();
  const search = () => {
    if (checkInDate > checkOutDate) {
      console.log("check in date cannot be greater than checkout date ");
      Swal.fire({
        icon: "error",
        title: "Check-in date can't be greater than check-out date",
        timer: 3000,
        timerProgressBar: true,
        text: "check in date should not be greater than check-out date",
      });
    }
  else  if (checkInDate == "" || checkOutDate == "") {
      console.log("please select checking and checkout date");
      Swal.fire({
        icon: "error",
        title: "could not make a search",
        timer: 2000,
        timerProgressBar: true,
        text: "please pick a check-in and checkout date",
      });
    } else {
      console.log("success");
      navigate(
        `/select-room?&checkInDate=${checkInDate}&checkoutDate=${checkOutDate}&location=${location}`
      );
      setCheckIn(checkInDate);
      setCheckOut(checkOutDate)
    }
  };

  return (
    <div className="p-5 md:p-20" id="hero">
      <div className="relative">
        <div className="text-white grid gap-4 md:w-1/2 ">
          <h1 className="text-4xl font-bold md:text-5xl">
            A piece of paradise just for you
          </h1>
          <p className="text-1xl font-semibold md:text-2xl">
            {" "}
            Book entire houses, villas, cabins and more
          </p>

          <button className="px-4 mt-3 md:mt-5  py-3 rounded text-l  text-white font-semibold bg-blue-600 md:w-1/2">
            {" "}
            Discover holiday rentals{" "}
          </button>
        </div>

        <div
          className="grid mt-5  md:grid-cols-3 justify-center gap-5 border items-center bg-[#ffb700] p-1 rounded md:mt-0  "
          id="picker">
          <div className="">
            <h1 className="text-white bg-[#003b95] pl-2"> check-in date*</h1>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => {
                setCheckInDate(e.target.value);
              }}
              placeholder="r"
              className="px-4 w-full text-black py-3 rounded text-l  text-white font-semibold bg-white"
            />
          </div>
          <div className="">
            <h1 className="text-white bg-[#003b95] pl-2"> check-out date*</h1>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => {
                setCheckOutDate(e.target.value);
              }}
              placeholder="r"
              className="px-4 w-full text-black py-3 rounded text-l  text-white font-semibold bg-white"
            />
          </div>
          <div>
            <h1 className="text-white bg-[#003b95] pl-2">Location*</h1>

            <div className="flex">
              <input
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                placeholder="where are you going?"
                className="px-4 w-full text-black  py-3 rounded text-l  text-white font-semibold bg-white"
              />
              <button
                className="px-4  py-3  text-l  text-white font-semibold bg-blue-600"
                onClick={search}>
                Search{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
