import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex text-black text-bold justify-between items-center h-24 max-w-full mx-auto px-4 bg-[#F3F3EF] ${
        isSticky ? "sticky top-0 z-50 transition-all duration-300 opacity-95" : ""
      }`}
    >
      <h1 className="w-full text-3xl font-bold text-[#CEAB2B]">DEV.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
        <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black transition hover:opacity-75"
          >
            Home
          </Link>
        </li>
        <li className="p-4">
        <Link
            to="courses"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black transition hover:opacity-75"
          >
            Courses
          </Link>
        </li>
        <li className="p-4">
        <Link
            to="news"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black transition hover:opacity-75"
          >
            News
          </Link>
        </li>
        <li className="p-4">
        <Link
            to="consultant"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black transition hover:opacity-75"
          >
            Consultants
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black transition hover:opacity-75"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={`${
          !nav
            ? "fixed text-black font-bold left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#F3F3EF] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#180715] m-4">DEV.</h1>
        <ul className="p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Courses</li>
          <li className="p-4 border-b border-gray-600">News</li>
          <li className="p-4 border-b border-gray-600">Consultants</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
