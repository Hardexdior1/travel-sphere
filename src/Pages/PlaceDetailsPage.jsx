import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";

import "react-multi-carousel/lib/styles.css";
import { FaHome, FaBath, FaWater, FaShower, FaUsers } from "react-icons/fa";
import { DiEnvato } from "react-icons/di";
import { GiWashingMachine } from "react-icons/gi";
import AllData from "./AllData";
import MyContext from "../Component/Context";
import { useContext } from "react";
import Swal from "sweetalert2";

import { format, parseISO } from "date-fns";

const PlaceDetailsPage = () => {
  const [bookingBox, setBooKingBox] = useState(false);

  // toggling the visibility of the booking box
  const toggleBookingBox = () => {
    setBooKingBox(!bookingBox);
  };
  // useNavigate
  const navigate = useNavigate();

  // booking message alert
  const placeBooking = () => {
    Swal.fire({
      icon: "success",
      title: "booking was successfully placed",
      timer: 3000,
      timerProgressBar: true,
      text: "you're going to be redirected to you booking page",
    });
    let timeoutId = setTimeout(() => {
    }, 3000);

    setTimeout(() => {

      clearTimeout(timeoutId);
      navigate("/booking-history");


    }, 3000);
    setBooKingBox(false);
    
  };

  // getting date from the context
  const value = useContext(MyContext);
  const {
    checkIn,
    setCheckIn,
    bookedPlaces,
    setBookedPlaces,
    addToBookedPlaces,
  } = value;

  //   location to get the name from the url
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const place = queryParams.get("to");

  //   find the name of the data that matches from what is coming from the url
  const result = AllData.find(
    (item) => item.name.toLowerCase() == place.toLocaleLowerCase()
  );

  console.log(bookedPlaces);

  //   if there is not name return not found
  if (!result) {
    return (
      <div className="h-screen text-red-400 flex items-center justify-center px-4">
        <p>
          {" "}
          OOOPS... NO LOCATION FOUND{" "}
          <span
            className="border-b text-black font-bold"
            onClick={() => {
              navigate("/");
            }}>
            back to home page{" "}
          </span>
        </p>
      </div>
    );
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="p-5 relative md:px-20 py-10">
      <div className="flex items-center justify-between mb-3">
        <h1 className="font-bold  md:text-2xl">
          {" "}
          {result.name.toLocaleUpperCase()}{" "}
        </h1>

        <button
          className="rounded bg-blue-600 text-sm py-1  text-white font-semibold md:py-2 px-3 text-lg"
          onClick={toggleBookingBox}>
          {" "}
          Reserve your stay{" "}
        </button>
      </div>
      <div className=" grid md:grid-cols-5 gap-5">
        <div className="grid grid-cols-2   gap-2 order-2 border md:order-1 md:grid-cols-2 md:col-span-2 ">
          <div>
            {" "}
            <img src={result.gridImg1} alt={result.name} className="w-full" />
          </div>
          <div>
            {" "}
            <img src={result.gridImg2} alt={result.name} className="w-full" />
          </div>
          <div>
            {" "}
            <img
              src={result.gridImg3}
              alt={result.name}
              className="w-full border"
            />
          </div>
          <div>
            {" "}
            <img
              src={result.gridImg4}
              alt={result.name}
              className="w-full border"
            />
          </div>
        </div>
        <Carousel
          responsive={responsive}
          className=" order-1 md:order-2 md:col-span-3">
          {result.slider.map((item, index) => {
            return (
              <div key={index} className="border mb-5 ">
                <img
                  src={item.gridImg}
                  alt="location-img"
                  className="w-full  object-cover md:h-[400px]"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="flex items-center justify-between gap-10 font-semibold overflow-x-scroll py-5">
        <div className="flex items-center gap-3 border shadow-md p-4 rounded shrink-0">
          <div>
            <FaHome size={24} className="text-gray-800" />
          </div>
          <span> {result.apartment} </span>
        </div>

        <div className="flex items-center gap-3 border shadow-md p-4 rounded shrink-0">
          <div>
            <FaBath size={24} className="text-gray-800" />
          </div>
          <span> {result.private} </span>
        </div>

        <div className="flex items-center gap-3 border shadow-md p-4 rounded shrink-0">
          <div>
            <FaWater size={24} className="text-gray-800" />
          </div>
          <span> {result.view} </span>
        </div>

        <div className="flex items-center gap-3 border shadow-md p-4 rounded shrink-0">
          <div>
            <FaShower size={24} className="text-gray-800" />
          </div>
          <span> {result.shower} </span>
        </div>

        <div className="flex items-center gap-3 border shadow-md p-4 rounded shrink-0">
          <div>
            <FaUsers size={24} className="text-gray-800" />
          </div>
          <span> {result.room} </span>
        </div>
        <div className="flex items-center gap-3 border shadow-md p-4 rounded shrink-0">
          <div>
            {" "}
            <span> {result.machine} </span>
          </div>

          <GiWashingMachine size={24} className="text-gray-800" />
        </div>
      </div>

      {bookingBox && (
        <div class="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-10">
          <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md z-10 relative">
            <button
              className="border-none color-black font-semibold text-2xl absolute top-0 left-4 mb-4"
              onClick={toggleBookingBox}>
              x
            </button>
            <h2 class="text-2xl font-semibold mb-4 mt-4">Enter your details</h2>
            <div class="bg-gray-100 p-4 mb-6 rounded-lg flex items-center">
              <svg
                class="w-6 h-6 text-yellow-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m4 0h-1a2 2 0 10-4 0h-1m6 4a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Almost done! Just fill in the{" "}
                <span class="font-semibold">*</span> required info
              </span>
            </div>
            <p>going to {result.name}</p>

            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}>
              <div>
                <input
                  type="text"
                  placeholder="your name"
                  name=""
                  id=""
                  className="w-full border py-2 rounded px-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email address"
                  name=""
                  id=""
                  className="w-full border py-2 rounded px-2"
                />
                <small className="text-xm font-semibold">
                  this email address is where you're going to be receiving your
                  booking confirmation message to
                </small>
              </div>

              <button
                className="border font-bold py-3 rounded bg-black text-white"
                onClick={() => {
                  placeBooking();
                  addToBookedPlaces(result);
                }}>
                {" "}
                confirm{" "}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceDetailsPage;
