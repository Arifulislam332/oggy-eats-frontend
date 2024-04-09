"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Overlay from "./Overlay";
import { Button } from "./ui/button";

export const slides = [
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
  "/images/slide-4.jpg",
];

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-82px)]">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        navigation={true}
        speed={500}
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full h-full"
      >
        {slides.map((el, index) => (
          <SwiperSlide key={index + el}>
            <div className="w-full h-full relative">
              <Image
                src={el}
                alt="hero section"
                fill
                priority
                className="w-full h-full object-cover"
              />
              <Overlay />
              <div className="absolute z-[2] top-0 right-0 bottom-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5 container mx-auto text-white text-center md:p-20">
                <h2 className="text-5xl md:text-7xl font-bold">
                  Foodie's paradise awaits: Order your favorites.
                </h2>
                <p className="md:text-xl">
                  "Satisfy your cravings with our convenient online food
                  ordering platform. Explore a diverse menu of mouthwatering
                  dishes crafted by top chefs. From savory classics to exotic
                  cuisines, there's something for everyone. Order now and enjoy
                  delicious meals delivered straight to your doorstep. Elevate
                  your dining experience today!"
                </p>
                <Link href="/#get_started">
                  <Button size="lg" className="md:text-xl bg-pink-500">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
