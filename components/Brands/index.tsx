"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// ✅ Import ảnh trực tiếp
import doitac1 from "/public/images/brands/doitac1.webp";
import doitac2 from "/public/images/brands/doitac2.webp";
import lo2 from "/public/images/brands/lo2.webp";
import lo3 from "/public/images/brands/lo3.webp";
import lo4 from "/public/images/brands/lo4.webp";
import lo5 from "/public/images/brands/lo5.webp";
import lo6 from "/public/images/brands/lo6.png";
import lo7 from "/public/images/brands/lo7.webp";
import Parnet3 from "/public/images/brands/Parnet3.webp";
import Parnet4 from "/public/images/brands/Parnet4.webp";

// ✅ Danh sách ảnh đối tác (array of objects)
const brandImages = [
  { id: 1, name: "Đối tác 1", image: doitac1, href: "#" },
  { id: 2, name: "Đối tác 2", image: doitac2, href: "#" },
  { id: 3, name: "Logo 2", image: lo2, href: "#" },
  { id: 4, name: "Logo 3", image: lo3, href: "#" },
  { id: 5, name: "Logo 4", image: lo4, href: "#" },
  { id: 6, name: "Logo 5", image: lo5, href: "#" },
  { id: 7, name: "Logo 6", image: lo6, href: "#" },
  { id: 8, name: "Logo 7", image: lo7, href: "#" },
  { id: 9, name: "Parnet 3", image: Parnet3, href: "#" },
  { id: 10, name: "Parnet 4", image: Parnet4, href: "#" },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <p className="py-5 text-center text-2xl font-semibold text-black">
          Khách hàng tiêu biểu
        </p>
        <div className="w-full">
          <div className="rounded-sm bg-gray-light p-6 dark:bg-gray-dark">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
            >
              {brandImages.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <div className="flex w-full items-center justify-center">
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="relative h-20 w-[180px] opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
                    >
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
