import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div
      id="about-me"
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold tex-[16px] ">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold tex-[16px] ">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <AiFillFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold tex-[16px] ">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <AiOutlineMail />
              <span className="text-[15px] ml-[6px]">
                youssefsaad299@gmail.com
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <AiOutlineMail />
              <span className="text-[15px] ml-[6px]">
                yousefsaad-47@outlook.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Yousef Saadallah Portfoilio ${new Date().getFullYear()} Inc.
          All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
