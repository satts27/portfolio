import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="sticky w-full">
      <div className="relative h-[100vh] bg-pinkish">
        <div className="h-3/5 flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-0">
          {/* Left Section: Email, Phone Number, Address */}
          <div className="w-full md:w-3/5 font-heading p-4 md:p-10 flex flex-col items-center md:items-start">
            <div className="mb-4 text-center text-[30px] md:text-[50px]">
              suryasatishganiga@gmail.com
            </div>
            {/* Phone Number and Address */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="text-[20px] md:text-[30px] mb-2 md:mb-0">
                +91 8850260523
              </div>
              <div className="text-[20px] md:text-[30px]">
                Mumbai, Maharashtra
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4">
              <div className="flex items-center text-[20px] md:text-[30px] mb-2 md:mb-0">
                <Link href={"https://www.linkedin.com/in/surya-ganiga/"}>
                  <FaLinkedinIn className="mr-2" /> <span>LinkedIn</span>
                </Link>
              </div>
              <div className="flex items-center text-[20px] md:text-[30px] mb-2 md:mb-0">
                <Link href={"https://github.com/satts27"}>
                  <FaGithub className="mr-2" /> <span>GitHub</span>
                </Link>
              </div>
              <div className="flex items-center text-[20px] md:text-[30px] mb-2 md:mb-0">
                <Link href={"https://x.com/2304Satts"}>
                  <FaTwitter className="mr-2" /> <span>Twitter</span>
                </Link>
              </div>
              <div className="flex items-center text-[20px] md:text-[30px] mb-2 md:mb-0">
                <Link href={"https://www.instagram.com/sattu._.supari/"}>
                  <FaInstagram className="mr-2" /> <span>Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section: Three Text Fields */}
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center mt-4 md:mt-0">
            <input
              type="text"
              className="w-full md:w-4/5 p-2 mb-2 border border-gray-300 rounded"
              placeholder="Name ..."
            />
            <input
              type="text"
              className="w-full md:w-4/5 p-2 mb-2 border border-gray-300 rounded"
              placeholder="Email ..."
            />
            <input
              type="text"
              className="w-full md:w-4/5 p-2 border border-gray-300 rounded"
              placeholder="Message ..."
            />
          </div>
        </div>
        {/* Absolute Positioned Element: @SATTS27 */}
        <div className="h-2/5 text-center text-[80px] md:text-[200px] font-heading text-creme text-border-black flex items-center justify-center">
          @SATTS27
        </div>
      </div>
    </div>
  );
};

export default Footer;
