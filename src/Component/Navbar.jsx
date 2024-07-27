import React, { useState, useEffect } from "react";
// import logo from "../../public/images/logo (1).png";
// import logo from "../images/Logo (1).png";
import { Link } from "react-router-dom";
import logo from "../Pages/images/travel.webp";
const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const [active, setActive] = useState("home");

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={
          isScrolled
            ? "z-10 bg-[#003b95] hidden md:flex md:items-center md:justify-between md:px-20 py-6 md:fixed left-0 right-0 shadow-lg duration-[300ms]"
            : "hidden bg-[#003b95] md:flex md:items-center md:justify-between md:px-20 py-6 shadow-lg duration-[300ms] "
        }>
        <Link to="/">
          {/* <h1 className="text-4xl text-white">Travel </h1> */}
          <span class="font-semibold text-xl tracking-tight shadow text-white 00">TravelSphere</span>
        </Link>
        <ul className="flex gap-6 md:items-center md:justify-between text-white">
          <li>
            {" "}
            <Link
              to="/"
              className={
                active == "home"
                  ? "text-[#fff] font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("home");
              }}>
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              className={
                active == "About"
                  ? "text-white font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("About");
              }}>
              About us
            </Link>{" "}
          </li>
          <li
            className={
              active == "rooms"
                ? "text-white font-bold"
                : "text-white font-bold md:text-[#1e1e1e]"
            }
            onClick={() => {
              setActive("rooms");
            }}>
            <Link to="/select-room">Our rooms </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/booking-history"
              className={
                active == "booking-history"
                  ? "text-white font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("booking-history");
              }}>
              Booking history
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              className={
                active == "contact"
                  ? "text-white font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("contact");
              }}>
              Contact
            </Link>{" "}
          </li>
        </ul>

        <Link to="/select-room">
          <div className="">
            <a href="#get-started">
              <button className="bg-gray-200 rounded text-[#1e1e2f] px-6 py-2 font-bold">
                Book Now
              </button>
            </a>
          </div>
        </Link>
      </nav>

      <div
        className={
          showNav
            ? "z-50 bg-[#003b95] px-6 py-8 gap-4 h-full  md:hidden"
            : "z-50 bg-[#003b95] px-6 py-8 gap-4 mb-40 h-full  md:hidden"
        }>
        <nav className="flex items-center  justify-between">
          <Link to="/">
          <span class="font-semibold text-xl tracking-tight shadow text-white 00">TravelSphere</span>

          </Link>
          {showNav ? (
            <div
              className="grid gap-1"
              onClick={() => {
                toggleNav();
              }}>
              <div className="h-1 w-5 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
            </div>
          ) : (
            ""
          )}
          {showNav ? (
            ""
          ) : (
            <div
              className="font-bold text-3xl text-white z-20"
              onClick={() => {
                toggleNav();
              }}>
              x
            </div>
          )}
        </nav>
        <ul
          className={
            showNav
              ? "z-10 bg-[#003b95] grid gap-6 md:items-center py-4 text-white bg-black px-6 absolute right-0 left-0 top-[-350px] h-1.5/2 duration-[300ms]"
              : "z-10 bg-[#003b95] grid gap-6 md:items-center py-10 text-white bg-black px-8 absolute right-0 left-0 top-[-16px]  h-2/2 duration-[300ms]"
          }>
          <li>
            {" "}
            <Link
              to="/"
              className={
                active == "home"
                  ? "text-[#54A9CE] font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("home");
                setShowNav(true);
              }}>
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              className={
                active == "About"
                  ? "text-white font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("About");
                setShowNav(true);
              }}>
              About us
            </Link>{" "}
          </li>
          <li
            className={
              active == "rooms"
                ? "text-white font-bold"
                : "text-white font-bold md:text-[#1e1e1e]"
            }
            onClick={() => {
              setActive("rooms");
              setShowNav(true);
            }}>
            <Link to="/select-room">Our rooms </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/booking-history"
              className={
                active == "booking-history"
                  ? "text-white font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("booking-history");
                setShowNav(true);
              }}>
              Booking history
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              className={
                active == "contact"
                  ? "text-white font-bold"
                  : "text-white font-bold md:text-[#1e1e1e]"
              }
              onClick={() => {
                setActive("contact");
                setShowNav(true);
              }}>
              Contact
            </Link>{" "}
          </li>

          <Link
            to="/select-room"
            onClick={() => {
              setShowNav(true);
            }}>
            <div className="">
              <a href="#get-started">
                <button className="bg-gray-200 rounded text-[#1e1e2f] px-6 py-2 font-bold">
                  Book Now
                </button>
              </a>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

// import React, { useState } from "react";

// import { MdDelete } from 'react-icons/md';
// import { FaBars } from 'react-icons/fa';
// import "../Styles/Nav.css"
// const Navbar = () => {
//
//   return <header className="px-12 py-6 relative md:static">
// <nav className="nav">
//   <Link to="/">
//   <img src={logo} alt="logo-img" />
//   </Link>

//   <ul className="md:flex items-center gap-8 static sm:bg-black absolute">
//     <li> <Link >Home</Link> </li>
//
//
//
//

//   </ul>

//   <div className="hidden md:block">
//     <button className="bg-gray-200 rounded text-[#1e1e2f] px-6 py-2" >Get Started</button>
//   </div>

//   <div className="block md:hidden">
//     <FaBars className="w-30 "/>
//   </div>
// </nav>

//   </header>;
// };

// export default Navbar;
