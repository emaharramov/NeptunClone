import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function MainSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper overflow-hidden"
      >
        <SwiperSlide>
          <img src="https://neptun.az/image/cache/webp/catalog/2.2024/hgv-1130x413.webp?v=9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://neptun.az/image/cache/webp/catalog/A.Narmin/second/1-1130x413.webp?v=9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://neptun.az/image/cache/webp/catalog/Vefamehsullar/50manat50bonusbanner-1130x413.webp?v=9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://neptun.az/image/cache/webp/catalog/yeniklassikbonuskart/slidebanner-1130x413.webp?v=9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://neptun.az/image/cache/webp/catalog/Narminishler/heftesonu-banner-cover2-1130x413.webp?v=9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
