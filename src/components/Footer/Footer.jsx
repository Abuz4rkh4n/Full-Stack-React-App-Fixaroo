import React from "react";
import facebook from "../../assets/social/facebook.png";
import instagram from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import be from "../../assets/social/Be.png";

const Footer = () => {
  return (
    <div className="p-8 font-Roboto h-[304px] flex flex-col justify-between">
      <div>
        <div className="w-full bg-gray-200 h-[1px]" />
        <div className="w-full flex justify-end mt-12 p-8">
          <div className="w-1/6 flex justify-between">
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between px-8">
        <p className=" text-gray-500">© 2023 Fixaroo</p>
        <div className="flex w-1/6 justify-between">
          <a href="">
            <img src={facebook} alt="facebook" className="w-[24px] h-[24px]" />
          </a>
          <a href="">
            <img
              src={instagram}
              alt="instagram"
              className="w-[24px] h-[24px]"
            />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" className="w-[24px] h-[24px]" />
          </a>
          <a href="">
            <img src={be} alt="Be" className="w-[24px] h-[24px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
