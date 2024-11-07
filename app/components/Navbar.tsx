import React from 'react';
import Image from 'next/image';
import { Socials } from '../constants';

const Navbar = () => {
  return (
    <div className="w-full h-[55px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flex flex-row items-center justify-between px-2 md:px-10 max-w-7xl mx-auto">
        <a
          href="#about-me"
          className="h-auto flex flex-row items-center min-w-fit"
        >
          <span className="font-bold text-[11px] xs:text-sm sm:text-base md:text-lg text-gray-300 hover:scale-105 active:scale-95 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l">
            Yousef Portfolio
          </span>
        </a>

        <div className="flex-1 max-w-[500px] mx-2 xs:mx-4 md:mx-8">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-1.5 xs:px-3 sm:px-6 py-1.5 rounded-full text-gray-200">
            <a
              href="#about-me"
              className="text-[10px] xs:text-xs sm:text-sm md:text-base cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 px-1 xs:px-2 sm:px-3 text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l bg-clip-text font-semibold"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-[10px] xs:text-xs sm:text-sm md:text-base cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 px-1 xs:px-2 sm:px-3 text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l bg-clip-text font-semibold"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-[10px] xs:text-xs sm:text-sm md:text-base cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 px-1 xs:px-2 sm:px-3 text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l bg-clip-text font-semibold"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-1.5 xs:gap-2 sm:gap-3 md:gap-5 min-w-fit">
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition-all duration-300"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
