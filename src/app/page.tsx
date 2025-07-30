'use client';

import './page.css';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Mousewheel, Keyboard, Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import { useAppContext } from './AppContext';

export default function Page() {
  const homeRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const swiperRef = useRef<SwiperType | null>(null);
  const { currentSlide, setCurrentSlide } = useAppContext();
  const slideNames = useAppContext().slideNames;

  useEffect(() => {
    setCurrentSlide(swiperRef.current?.activeIndex !== undefined ? slideNames[swiperRef.current.activeIndex] : 'Home');
  }, []);

  return (
    <main>
      <Navbar swiperRef={swiperRef} />

      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        direction="horizontal"
        slidesPerView={1}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        className="swiper-container-1"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(slideNames[swiper.activeIndex])}
      >
        <SwiperSlide>
          <Home ref={homeRef} />
        </SwiperSlide>
        <SwiperSlide>
          <Menu ref={menuRef} />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
