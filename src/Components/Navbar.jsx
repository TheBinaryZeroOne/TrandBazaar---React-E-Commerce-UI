import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between items-center py-5 px-5 bg-black text-white lg:px-40 lg:bg-white lg:text-black">
        {/* logo */}
        <h2 className="font-bold text-xl lg:text-3xl overflow-y-hidden">
          TrendBazaar
        </h2>
        {/* navlinks */}
        <div className="hidden items-center gap-[15%] lg:flex">
          <ul className="flex gap-10">
            <NavLink to="/">
              <li className="focus:font-bold">home</li>
            </NavLink>
            <NavLink to="/product">
              <li>Products</li>
            </NavLink>
            <NavLink to="/cart">
              <li>cart</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
          </ul>
          {/* <input type="text" placeholder='search' className='border-2 border-black rounded-full px-5 py-1' /> */}
        </div>
        {/* signup */}
        <button className="hidden items-center gap-2 font-bold lg:flex">
          
          <NavLink to="/signup">
            <li className="focus:font-bold flex items-center gap-2"><FaUser /> Signup</li>
          </NavLink>
        </button>
        <button
          className="duration-500 ease-in lg:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </nav>
      <div
        className={
          isOpen
            ? "z-50 absolute flex bg-black text-white w-screen py-10 top-[6.5vh] duration-500 lg:hidden ease-in-out"
            : "top-[0vh] duration-300 ease-out"
        }
      >
        <ul
          className={
            isOpen
              ? "flex flex-col items-center font-bold gap-6 w-full duration-500 ease-in-out"
              : "hidden duration-300"
          }
        >
          <NavLink to="/">
            <li className="focus:font-bold">home</li>
          </NavLink>
          <NavLink to="/product">
            <li>Products</li>
          </NavLink>
          <NavLink to="/cart">
            <li>cart</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
