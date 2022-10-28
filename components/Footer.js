import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMediumM,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Footer = () => {
  return (
    <footer className="text-center text-white overflow-hidden">
      <div className="container p-6">
        <div className="w-full pl-10 ">
          {" "}
          <h2 className="flex dark:text-gray-300 text-gray-700 align-middle text-2xl font-bold mb-4">
            Blog{" "}
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1120: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mt-4 grid lg:grid-cols-6 md:grid-cols-3 gap-4 overflow-hidden self-center"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:mb-0 mb-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="border-t border-gray-500 dark:border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <p className="mb-8 md:mb-0 text-gray-500">
              All rights reserved &copy; 2023
            </p>
            <div className="flex w-full md:w-auto">
              <a
                className="mr-8"
                href="https://www.linkedin.com/in/samuelajibola/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                className="mr-8"
                href="https://github.com/samuel-extras"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                className="mr-8"
                href="https://web.facebook.com/samuelextras"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                className="mr-8"
                href="https://twitter.com/Samuel_extras"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                href="https://medium.com/@ajibolasamueloluwasegun"
                className="mr-8"
                target="_blank"
                rel="noreferrer"
              >
                <FaMediumM className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
              <a
                href="https://www.instagram.com/samuel_extras/"
                className="mr-8 "
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
