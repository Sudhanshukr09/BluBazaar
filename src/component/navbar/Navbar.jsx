import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const [open, setopen] = useState(false)
  const isopen =  () =>{
    setopen(!open)
    console.log(open)
  }

  return (
    <>
      <nav className="flex items-center justify-between z-50 bg-white py-3 px-5 border-b relative">
        <Link to={"/"}>
          <div className="font-bold text-[1.3rem] cursor-pointer flex items-center">
            <img
              src="https://static-00.iconduck.com/assets.00/online-shop-icon-2048x2048-z41fvsql.png"
              className="h-[1.5rem] mr-1"
            />
            Blu<span className="text-orange-400">Bazaar.</span>
          </div>
        </Link>
        <div>
          <div className="sm:flex hidden gap-5 font-semibold cursor-pointer">
            <Link to={"/"}>Home</Link>
            <Link to={"/allproduct"}>All Product</Link>
            <Link to={"/Mens"}>Mens</Link>
            <Link to={"/kids"}>Kids</Link>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <Link to={"/login"}>
            <div className=" bg-orange-400 font-semibold w-fit px-4 py-1 rounded cursor-pointer active:scale-95 text-white">
              Login
            </div>
          </Link>

          <div>
            <Link to={"/cart"}>
              <IoMdCart className="size-8" />
            </Link>
          </div>
          <GiHamburgerMenu onClick={isopen} className="size-9 sm:hidden" />
        </div>
      </nav>
      {
      open? 
        <main>
        <ul className="flex flex-col gap-10 text-2xl absolute top-[50px] left-0 h-screen w-full z-50 bg-orange-400 items-center justify-center font-semibold">
          <Link to="/">
            <li className="mt-5 ☐ text-white hover:text-gray-900 cursor-pointer">Home</li>
          </Link>
          <li className="mt-5 text-white hover:text-gray-900 cursor-pointer">
            All Products
          </li>
          <li className="mt-5 text-white hover:text-gray-900 cursor-pointer">Mens</li>
          <li className="mt-5 text-white hover:text-gray-900 cursor-pointer">Kids</li>
        </ul>
        <button className="absolute top-[75px] z-50 right-0 text-white py-2 px-4 cursor-pointer">
          <RxCross2 size={30} onClick={isopen} />
        </button>
      </main>:''
      }
      
    </>
  );
};

export default Navbar;
