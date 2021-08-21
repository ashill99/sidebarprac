import React, { useState } from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiCog, BiFoodMenu } from "react-icons/bi";
import { GrDeliver, GrMail } from "react-icons/gr";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";

function Nav() {

    return (

    <div class="relative min-h-screen bg-white md:flex">

  {/* <!-- mobile menu bar --> */}

  {/* <div class="bg-yellow-100 text-gray-700 flex justify-between md:hidden"> */}

{/* Small side bar  */}
  <div class="sidebar bg-yellow-100 text-black-100 w-16 space-y-6 py-7 px-2 absolute inset-y-0 left-0  md:hidden">
    
    {/* <!-- logo --> */}

    <a href="#" class="block p-3 w-12 text-green-900 font-bold"><img src="https://images.squarespace-cdn.com/content/v1/5fed1091cc6a33436b48697d/327d15bd-5843-4840-9b13-cf608516f8ca/Parkday+App.png?format=1500w" /> </a>
    <a href="#" class="block p-3 font-bold"><FiHome /></a>
    <a href="#" class="block p-3 font-bold"><BiFoodMenu /></a>
    <a href="#" class="block p-3 font-bold"><FaFileInvoiceDollar /></a>
    <a href="#" class="block p-3 font-bold"><GrDeliver /></a>
    <a href="#" class="block p-3 font-bold"><BsFillPeopleFill /></a>


    {/* <!-- mobile menu button --> */}

    {/* <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"> */}
      {/* <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg> */}
    {/* </button> */}

  </div>

  {/* <!-- sidebar --> */}
  <div class="sidebar bg-yellow-100 text-black-100 w-48 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

    {/* <!-- logo --> */}
    <a href="#" class="text-black flex w-16 items-center space-x-1 px-4">
      {/* <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg> */}
      <img src="https://images.squarespace-cdn.com/content/v1/5fed1091cc6a33436b48697d/327d15bd-5843-4840-9b13-cf608516f8ca/Parkday+App.png?format=1500w" />
      <span class="text-2xl font-extrabold">Parkday</span>
    </a>

    {/* <!-- nav --> */}
    <nav>
      <a href="#" class="flex gap-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-black-700 hover:text-white">
      <FiHome />  Home
      </a>
      <a href="" class="flex gap-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-black-700 hover:text-white">
      <BiFoodMenu /> Menu
      </a>
      <a href="" class="flex gap-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-black-700 hover:text-white">
      <GrDeliver /> Orders
      </a>
      <a href="" class="flex gap-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-black-700 hover:text-white">
      <FaFileInvoiceDollar /> Invoices
      </a>
      <a href="" class="flex gap-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-black-700 hover:text-white">
      <BsFillPeopleFill /> Employees
      </a>
    </nav>
  </div>

  {/* <!-- content --> */}
  <div class="flex-1 p-10 text-2xl ml-10 font-bold md:-ml-5">
    Welcome Back
  </div>

</div>

            );
          };

export default Nav;