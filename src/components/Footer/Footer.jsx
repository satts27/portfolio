import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // 40% threshold for intersection
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div id="footer" className="sticky w-full">
      <div className="relative h-[100vh] bg-pinkish">
        <div className="h-3/5 flex items-center justify-center w-full">
          {/* Left Section: Email, Phone Number, Address */}
          <div className="w-3/5 font-heading p-10 flex flex-col">
            <div className="mb-4 text-center text-[50px]">
              suryasatishganiga@gmail.com
            </div>
            {/* Phone Number and Address */}
            <div className="flex items-center justify-between">
              <div className="text-[30px]">+91 8850260523</div>
              <div className="text-[30px]">Mumbai, Maharashtra</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[30px]">LinkedIn</span>
              <span className="text-[30px]">GitHub</span>
              <span className="text-[30px]">Twitter</span>
              <span className="text-[30px]">Instagram</span>
            </div>
          </div>

          {/* Right Section: Three Text Fields */}
          <div className="w-2/5 flex flex-col items-center justify-center">
            <input
              type="text"
              className="w-4/5 p-2 mb-2 border border-gray-300 rounded"
              placeholder="Name ..."
            />
            <input
              type="text"
              className="w-4/5 p-2 mb-2 border border-gray-300 rounded"
              placeholder="Email ..."
            />
            <input
              type="text"
              className="w-4/5 p-2 border border-gray-300 rounded"
              placeholder="Message ..."
            />
          </div>
        </div>
        {/* Absolute Positioned Element: @SATTS27 */}
        <div className="h-2/5 text-center text-[200px] font-heading text-creme text-border-black">
          @SATTS27
        </div>
      </div>
    </div>
  );
};

export default Footer;
