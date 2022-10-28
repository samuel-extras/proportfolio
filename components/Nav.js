import Image from "next/image";
import React, { useState, useRef } from "react";
import {
  FaAddressCard,
  FaHome,
  FaProjectDiagram,
  FaServicestack,
  FaUserAlt,
  FaFileDownload,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { BsFillChatTextFill } from "react-icons/bs";

const navs = [];

const Nav = ({
  homeRef,
  aboutRef,
  experienceRef,
  servicesRef,
  portfolioRef,
  contactRef,
}) => {
  const [active, setActive] = useState("home");

  return (
    <nav
      className="
      pointer-events-auto min-w-0 border-b  border-r bg-gray-100 dark:border-white border-opacity-10 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30 dark:backdrop-blur-lg backdrop-blur-lg backdrop-filter firefox:bg-opacity-70
      items-center justify-center left-1/2 -translate-x-1/2
     max-w-max bottom-8 fixed backdrop-opacity-40 shadow-sm rounded-2xl z-20"
    >
      <ul className="flex gap-5 p-4">
        <li className="bg-gray-800 rounded-md cursor-pointer p-2 items-center justify-center flex">
          <FaHome
            className={`${
              active === "home" ? "active" : ""
            }text-gray-400 hover:text-white active:text-white`}
            onClick={() => {
              setActive("home");
              homeRef?.current?.scrollIntoView();
            }}
            size={active === "home" ? 28 : 22}
          />
        </li>
        <li className="bg-gray-800 rounded-md cursor-pointer p-2 items-center justify-center flex">
          {" "}
          <FaUserAlt
            className={`${
              active === "about" ? "active" : ""
            }text-gray-400 hover:text-white active:text-white`}
            onClick={() => {
              setActive("about");
              aboutRef?.current?.scrollIntoView();
            }}
            size={active === "about" ? 28 : 22}
          />
        </li>
        <li className="bg-gray-800 rounded-md cursor-pointer p-2 items-center justify-center flex">
          {" "}
          <SiExpertsexchange
            className={`${
              active === "experience" ? "active" : ""
            }text-gray-400 hover:text-white active:text-white`}
            onClick={() => {
              setActive("experience");
              experienceRef?.current?.scrollIntoView();
            }}
            size={active === "experience" ? 28 : 22}
            width={30}
            height={30}
          />
        </li>
        <li className="bg-gray-800 rounded-md cursor-pointer p-2 items-center justify-center flex">
          {" "}
          <FaServicestack
            className={`${
              active === "services" ? "active" : ""
            }text-gray-400 hover:text-white active:text-white`}
            onClick={() => {
              setActive("services");
              servicesRef?.current?.scrollIntoView();
            }}
            size={active === "services" ? 28 : 22}
          />
        </li>
        <li className="bg-gray-800 rounded-md cursor-pointer p-2 items-center justify-center flex">
          <MdWorkOutline
            className={`${
              active === "portfolio" ? "active" : ""
            }text-gray-400 hover:text-white active:text-white`}
            onClick={() => {
              setActive("portfolio");
              portfolioRef?.current?.scrollIntoView();
            }}
            size={active === "portfolio" ? 28 : 22}
          />
        </li>
        <li className="bg-gray-800 rounded-md cursor-pointer p-2 items-center justify-center flex">
          {" "}
          <BsFillChatTextFill
            className={`${
              active === "testimonial" ? "active" : ""
            }text-gray-400 hover:text-white active:text-white`}
            onClick={() => {
              setActive("testimonial");
              contactRef?.current?.scrollIntoView();
            }}
            size={active === "testimonial" ? 28 : 22}
          />
        </li>
        {/* <li className="bg-gray-800 relative rounded-md cursor-pointer p-2 items-center justify-center flex">
          {" "}
          <FaFileDownload
            className={`${
              active === "#contact" ? "active" : ""
            }text-gray-400 hover:text-white active:text-white animate-pulse`}
            onClick={() => setActive("#contact")}
            size={active === "#contact" ? 28 : 22}
          />
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
