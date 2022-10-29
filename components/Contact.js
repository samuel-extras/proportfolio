import React from "react";

import { BsWhatsapp, BsMessenger } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = ({ contactRef }) => {
  return (
    <div
      className="w-full min-h-screen my-10 md:p-8 p-4 overflow-hidden"
      ref={contactRef}
    >
      <div className="w-full pl-10 ">
        {" "}
        <h2 className="dark:text-gray-300 text-gray-700 align-middle text-4xl font-bold mb-4">
          Get In Touch{" "}
        </h2>
      </div>
      <div className="w-full relative flex flex-col md:flex-row ">
        <h2 className="absolute dark:text-white text-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 sm:rotate-0   text-8xl font-bold opacity-10 -z-10">
          CONTACT
        </h2>{" "}
        <div className="w-full h-auto md:w-1/2 p-10 ">
          <div className="flex w-full justify-center items-center">
            {" "}
            <h2 className="font-bold dark:text-gray-100 text-gray-500 text-4xl">
              Contact
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="my-3">
              <p className="text-base dark:text-gray-100 text-gray-600 text-center">
                Knowledgeable and skilled software development professional with
                over 5 years of experience offering advanced abilities in a wide
                range of programming languages.{" "}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center my-2">
              <p className="font-bold dark:text-gray-100 text-gray-600">
                Address
              </p>
              <p className="italic dark:text-gray-100 text-gray-600">
                Lagos, LA 100011 Nigeria
              </p>
            </div>
            <div className="flex flex-col justify-center items-center my-2">
              <p className="font-bold dark:text-gray-100 text-gray-600">
                Phone
              </p>
              <a href="tel:+2349033728282">
                <p className="italic dark:text-gray-100 text-gray-600 hover:underline hover:text-blue-500">
                  +234 9033728282
                </p>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center my-2">
              <p className="font-bold dark:text-gray-100 text-gray-600">
                Email
              </p>
              <a
                href="mailto:samuel88783.so@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <p className="italic dark:text-gray-100 text-gray-600 hover:underline hover:text-blue-500">
                  samuel88783.so@gmail.com
                </p>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center my-2">
              <p className="font-bold dark:text-gray-100 text-gray-600   pb-2">
                Message me
              </p>
              <div className="flex ">
                <a
                  href="https://wa.me/+2349033728282"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp
                    size={28}
                    className="mr-4 dark:text-gray-100 text-gray-600 dark:hover:text-[#25D366] hover:text-[#25D366]"
                  />{" "}
                </a>
                <a
                  href="https://m.me/samuelextras"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsMessenger
                    size={28}
                    className="mr-4 dark:text-gray-100 text-gray-600 dark:hover:text-[#006AFF] hover:text-[#006AFF]"
                  />{" "}
                </a>
                <a
                  href="mailto:samuel88783.so@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail
                    size={28}
                    className="dark:text-gray-100 cursor-pointer text-gray-600 dark:hover:text-[#DB4437] hover:text-[#DB4437]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-8 h-auto md:w-1/2">
          <div className="dark:bg-black bg-gray-100 backdrop-blur-lg backdrop-filter-none bg-opacity-50 hover:bg-opacity-90 rounded-xl h-full p-8 shadow-xl dark:shadow-3xl">
            <div className="flex justify-center items-center my-6">
              {" "}
              <h2 className="font-bold dark:text-gray-100 text-gray-700 text-4xl">
                Contact Form
              </h2>
            </div>
            <form className="w-full flex flex-col justify-center items-center pt-4 px-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row items-center mt-4 justify-between gap-4">
                  <div className="border-b dark:border-gray-300 border-gray-600 w-full md:w-1/2 my-3">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-gray-200 py-3 px-4 leading-normal focus:outline-none"
                      type="text"
                      placeholder="Name"
                      aria-label="Full name"
                    />
                  </div>
                  <div className="border-b dark:border-gray-300 border-gray-600 w-full md:w-1/2">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-gray-200 py-3 px-4 leading-normal focus:outline-none"
                      type="text"
                      placeholder="Subject"
                      aria-label="Email Subject"
                    />
                  </div>
                </div>
                <div className="border-b dark:border-gray-300 border-gray-600">
                  <textarea
                    className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-gray-200  py-3 px-4 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Message*"
                    aria-label="Full name"
                    rows="4"
                  />
                </div>
              </div>
              <button className="bg-transparent hover:bg-gray-500 dark:hover:bg-gray-300 dark:bg-transparent dark:text-gray-400 text-gray-600 self-end mt-4 font-semibold hover:text-gray-200 py-2 px-4 border dark:border-gray-200 border-gray-600 hover:border-transparent dark:hover:border-none dark:hover:text-black rounded whitespace-nowrap">
                Send Message
              </button>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
