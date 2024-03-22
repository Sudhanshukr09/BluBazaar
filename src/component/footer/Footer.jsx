import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-[100vw] text-white sm:flex sm:text-left text-center  px-10 py-20 h-full justify-center">
        <div className="font-bold text-[1.3rem] cursor-pointer mb-7 sm:mr-[14rem] sm:flex sm:justify-center">
          BlueBazaar
        </div>
        <div className="lg:flex  lg:justify-around lg:w-full gap-5 grid  grid-cols-1 sm:grid-cols-2 ">
          <div>
            <h3 className="mb-4">MENU</h3>
            <div>
              <ul className="leading-7">
                <li>Features</li>
                <li>Info Center</li>
                <li>News blog</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-4">COMPANY</h3>
            <div>
              <ul className="leading-7">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Term & Condition</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-4">CONTACT</h3>
            <div>
              <ul className="leading-7">
                <li>Contact sales</li>
                <li>+91-9876543210</li>
                <li>News blog</li>
                <li>+91-8739463273</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-4">TECH SUPPORT</h3>
            <div>
              <ul className="leading-7">
                <li>Contact Support</li>
                <li>Info Centre</li>
                <li>Activate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white bg-gray-500 text-center  sm:flex sm:justify-between px-5 py-2">
        <p>©️ 2024 BlueBazaar —@copyright</p>
        <p className="flex gap-5 justify-center">
          <a href="">
            <FaFacebook className="size-[1.4rem]" />
          </a>{" "}
          <a href="">
            <FaInstagram className="size-[1.4rem]" />
          </a>
          <a href="">
            <FaTwitter className="size-[1.4rem]" />
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
