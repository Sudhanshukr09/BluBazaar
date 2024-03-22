import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineLocalShipping, MdOutlinePayment } from "react-icons/md";

const Service = () => {
  return (
    <>
     <div className='flex flex-wrap justify-center items-center gap-10 mt-10 mx-[4rem]'>
      <div className='hover:scale-110 transition duration-500  bg-red-500 rounded px-[40px] py-5 flex flex-col justify-center items-center text-white text-[1rem]'><FaShippingFast className='size-[1.5rem]' /><p>FREE SHIPPING</p></div>
      <div className='hover:scale-110 transition duration-500  bg-red-500 rounded px-2 py-5 flex flex-col justify-center items-center text-white text-[1rem]'><TiShoppingCart className='size-[1.5rem]' /><p>AUTHENTIC PRODUCTS</p></div>
      <div className='hover:scale-110 transition duration-500  bg-red-500 rounded px-[45px] py-5 flex flex-col justify-center items-center text-white text-[1rem]'><MdOutlineLocalShipping className='size-[1.5rem]' /><p>EASY RETURN</p></div>
      <div className='hover:scale-110 transition duration-500  bg-red-500 rounded px-[30px] py-5 flex flex-col justify-center items-center text-white text-[1rem]'><MdOutlinePayment className='size-[1.5rem]' /><p>SECURE PAYMENT</p></div>
      </div> 
    </>
  )
}

export default Service
