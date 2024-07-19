import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center h-20 bg-black px-[15rem] sm:px-3 sm:text-sm md:px-10 relative">
      <div className="absolute w-[70rem] h-[70rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-radiate via-transparent to-transparent -top-[45rem] sm:-top[3rem] md:-top[3rem] right-[15rem] sm:-right-[33rem] md:-right-[25rem] z-10 opacity-85" />
      <div className="absolute w-[80rem] h-[80rem] sm:w-0 sm:h-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-radiate via-transparent to-transparent -top-[47rem] -right-[15rem] md:-right-[20rem] z-10 opacity-85" />
      <div className="w-[5rem] sm:w-[3rem] md:w-[4rem] h-full sm:h-[3rem] md:h-[4rem] flex justify-center z-20">
        <img
          className="w-full cursor-pointer"
          src="/images/logo.jpg"
          alt="logo"
        />
      </div>
      {isOpen ? (
        <div className="w-[100%] h-[100vh] fixed bg-bg text-white z-40 inset-0 flex flex-col justify-center items-center gap-10">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl z-20 hidden sm:block absolute top-5 right-5">
            X
          </button>
          <ul className="text-xl flex flex-col justify-around gap-5 z-20">
            <li className="cursor-pointer underline decoration-button">About</li>
            <li className="cursor-pointer underline decoration-button">Services</li>
            <li className="cursor-pointer underline decoration-button">Process</li>
            <li className="cursor-pointer underline decoration-button">Work</li>
            <li className="cursor-pointer underline decoration-button">Pricing</li>
            <li className="cursor-pointer underline decoration-button">FAQs</li>
          </ul>
          <button className="bg-transparent border border-button px-8 py-4 text-xl rounded-lg z-20 hidden sm:block">Book a call</button>
        </div>
      ) : (
        <ul className="flex justify-around gap-5 z-20 sm:hidden">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Process</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">FAQs</li>
        </ul>
      )}
      <button className="bg-transparent border border-button px-6 py-2 rounded-lg z-20 sm:hidden">
        Book a call
      </button>
      <button
        onClick={() => setIsOpen(true)}
        className="rotate-90 text-lg z-20 hidden sm:block"
      >
        |||
      </button>
    </header>
  );
};

export default Header;
