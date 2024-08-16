"use client";
import React from "react";
import Image from "next/image";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">About <span className="text-orange-500">Me</span></h1>
      <div className=" px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
        {/* Book Section */}
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 ">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Book Title</h2>
              <p className="text-lg text-white/70 mt-2">Book description goes here.</p>
            </div>
          </div>
        </div>

        {/* PC Section */}
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 ">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">PC Section</h2>
              <p className="text-lg text-white/70 mt-2">PC description goes here.</p>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 ">
            <Image src={card} alt="card" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Card Section</h2>
              <p className="text-lg text-white/70 mt-2">Card description goes here.</p>
            </div>
          </div>
        </div>

        {/* Finance Section */}
        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 ">
            <Image src={finance} alt="finance" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Finance Section</h2>
              <p className="text-lg text-white/70 mt-2">Finance description goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
