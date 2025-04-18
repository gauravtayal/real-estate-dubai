import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import {
  SlLocationPin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineContactPhone } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import Input from "./Input";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const year = new Date().getFullYear();
  const discover = (
    <>
      <nav className="list-none mb-10">
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> Miami</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> Los Angeles</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span>Chicago</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> New York</span>
          </Link>
        </li>
      </nav>
    </>
  );

  const contactUs = (
    <>
      <nav className="list-none mb-10">
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 items-center text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
          >
            <SlLocationPin /> <span> 774 NE 84th St Miami, FL 33879</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"tel:+8801768227738"}
            className="flex gap-2 items-center text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
          >
            <BsTelephone /> <span> +880 01768227738</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"tel:+8801768227738"}
            className="flex gap-2 items-center text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
          >
            <MdOutlineContactPhone /> <span>+880 01768227738</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"mailto:contacthasanrifat@gmail.com "}
            className="flex gap-2 items-center text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
          >
            <FiMail /> <span> contacthasanrifat@gmail.com</span>
          </Link>
        </li>
      </nav>
    </>
  );

  const social = (
    <nav className="list-none flex gap-2 items-center">
      <li>
        <Link
          href={"https://www.facebook.com/Dev.Hasan.Rifat"}
          className="text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
        >
          <SlSocialFacebook />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.linkedin.com/feed/"}
          className="text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
        >
          <SlSocialLinkedin />
        </Link>
      </li>
      <li>
        <Link
          href={"https://twitter.com/home"}
          className="text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
        >
          <TfiTwitter />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.instagram.com/hasan_rifat_/"}
          className="text-[14px] leading-[25px] text-white hover:text-[#00aeff] "
        >
          <SlSocialInstagram />
        </Link>
      </li>
    </nav>
  );
  return (
    <footer className="">
      {/* footer top  */}
      <div className="py-[100px] bg-[#004274] ">
        <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-[30px]">
            <div className="sm:col-span-1">
              <div className="px-4">
                <h2 className="text-[18px] leading-[25px] font-medium text-white mb-[25px]">
                  Discover
                </h2>
                {discover}
              </div>
            </div>
            <div className="sm:col-span-1">
              <div>
                <div className="px-4">
                  <h2 className="text-[18px] leading-[25px] font-medium text-white   mb-[25px]">
                    Contact Us
                  </h2>
                  {contactUs}
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <div>
                <div className="px-4">
                  <h2 className="text-[18px] leading-[25px] font-medium text-white   mb-[25px]">
                    Newsletter
                  </h2>
                  <form className="grid grid-cols-1 sm:grid-cols-5 gap-[30px] items-center">
                    <input
                      type={"email"}
                      placeholder="email"
                      name={"email"}
                      className={
                        "w-full sm:col-span-4 px-[16px] py-2 border-[#dce0e0] border-[1px] rounded-[2px]  ${className} focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      }
                    />
                    <button
                      className=" border-0 rounded-[4px]  bg-[#00aeff] hover:bg-[#33beff] text-[14px] text-white sm:w-full sm:col-span-1 btn btn-sm"
                      type="submit"
                    >
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="py-[25px] bg-[#00335a]">
        <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
          <div className="flex justify-between w-full">
            <p>© {year} Hasan Rifat - All rights reserved</p>
            <div>{social}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
