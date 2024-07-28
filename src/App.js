import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
// import Home from "./Component/Home";
import MyContext from "./Component/Context";
import CountryContent from "./Pages/CountryContent";
import SearchPage from "./Component/SearchPage";
import SearchResults from "./Component/SearchResult";
import Navbar from "./Component/Navbar";
import LandingPage from "./Component/LandingPage";
import LocationResult from "./Pages/LocationResult";
import PlaceDetailsPage from "./Pages/PlaceDetailsPage";
import BookingHistory from "./Pages/BookingHistory";
import Footer from "./Component/Footer";
import ga from "./new_recording_-_7_28_2024,_12_15_53_am (Original).mp4"
function App() {
  // const [booked]

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // booked places
  const [bookedPlaces, setBookedPlaces] = useState([]);
  console.log(bookedPlaces);


  // saving booked places to local storage

  useEffect(() => {
    const savedBookedPlaces = localStorage.getItem("bookedPlaces");
    const checkIn = localStorage.getItem("checkIn");
    const checkOut = localStorage.getItem("checkOut");


    if (savedBookedPlaces) {
      const parsedCart = JSON.parse(savedBookedPlaces);
      setBookedPlaces(parsedCart);
    }
    if (checkIn) {
      const parsedCart = JSON.parse(checkIn);
      setCheckIn(parsedCart)
    }
    if (checkOut) {
      const parsedCart = JSON.parse(checkOut);
      setCheckOut(parsedCart)
    }
  }, []);

  const addToBookedPlaces = (item) => {
    setBookedPlaces((prev) => {
      localStorage.setItem("bookedPlaces", JSON.stringify([...prev, item]));
      localStorage.setItem("checkIn", JSON.stringify(checkIn));
      localStorage.setItem("checkOut", JSON.stringify(checkOut));


      return [...prev,  item];
    });
  };
  const removeFromBookedPlaces = (item) => {
    setBookedPlaces((currentPlace) => {
      const indexOfItemToRemove = currentPlace.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (indexOfItemToRemove === -1) {
        return currentPlace;
      }
      const updatedCart = [
        ...currentPlace.slice(0, indexOfItemToRemove),
        ...currentPlace.slice(indexOfItemToRemove + 1),
      ];
      // localStorage.setItem('cart', JSON.stringify([...prev, {...product, quantity: 1 }]));
      localStorage.setItem("bookedPlaces", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const contextValue = {
    checkIn,
    setCheckIn,
    bookedPlaces,
    setBookedPlaces,
    addToBookedPlaces,
    removeFromBookedPlaces,
    checkOut,
    setCheckOut,
  };

  return (
    <section className="App">
      <video src={ga} controls></video>
      <MyContext.Provider value={contextValue}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="select-room" element={<LocationResult />} />
            <Route path="place-details" element={<PlaceDetailsPage />} />
            <Route path="booking-history" element={<BookingHistory />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </section>
  );
}

export default App;
