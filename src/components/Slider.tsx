"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      <div
        className="w-max h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-6 xl:gap-8 text-center">
              <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl text-gray-600 font-light">
                {slide.description}
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-800">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-6 text-base md:text-lg lg:text-xl transition-transform hover:scale-105 hover:bg-gray-800 focus:outline-none">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover transition-transform ease-in-out duration-700"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Dots */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex gap-6">
        {slides.map((slide, index) => (
          <div
            className={`w-4 h-4 rounded-full ring-2 ring-gray-500 cursor-pointer transition-transform transform ${
              current === index ? "scale-125 bg-gray-800" : "bg-gray-300"
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
