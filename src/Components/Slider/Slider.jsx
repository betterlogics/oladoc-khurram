import React, { useRef, useState } from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div className="bg-white page-section about-section">
      <div className="container listing-brief-intro-section py-5">
        <div className="title-holder text-start">
          <h4 className="fw-normal py-3">
            Images and videos about Doctors Hospital
          </h4>
        </div>
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide >
            <div className=" slide-item ">
              <img
                src="Hospital-Images9.png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide> <div className=" slide-item ">
              <img
                src="hospital-location-01.png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="sample-4-hospital-CTA-.png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="hospital-Services (12).png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="Hospital-Images12.png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="Hospital-Images11.png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="1603447684_Hospital-Images10 (8).png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="Hospital-Images8 (9).png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="Hospital-Images7 (9).png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="Hospital-Images3 (12).png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="Hospital-Images (14).png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
          <SwiperSlide><div className=" slide-item ">
              <img
                src="Hospital-Images2 (12).png"
                alt=""
                className="img-fluid  hover-shadow"
              />
            </div></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
