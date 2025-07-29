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
import { useScroll } from './scrollContext';

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const { isScrolled, setIsScrolled } = useScroll();

  useEffect(() => {
  console.log("Valore aggiornato di isScrolled:", isScrolled);
}, [isScrolled]);

  return (
    <main>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        mousewheel
        keyboard
        loop={false}
        nested={true}
        className="swiper-container"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => { 
          console.log('Slide changed to:', swiper.activeIndex);
          setIsScrolled(swiper.activeIndex > 0);
        }}
      >
        <SwiperSlide>
          <div id="hero-content" className="hero-content" ref={heroRef}>
            <h1 className="hero-title fade-in-text">
              La piadina<br />dei nostri<br />antenati.
            </h1>
            <p className="hero-subtitle fade-in-text">
              <i>
                Fatta a mano come una volta.<br />
                E tanto altro ancora.
              </i>
            </p>
            <div className="scroll-button-wrapper">
              <button className="pulse-button" onClick={() => swiperRef.current?.slideNext()}>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homepage-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies vulputate massa, in tempor nisl egestas at. Duis accumsan dui in augue faucibus malesuada. Nulla non erat sit amet ex iaculis tincidunt. Nulla feugiat lectus massa, sed egestas odio placerat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eu ante quis lacus fermentum lacinia. Morbi eu orci venenatis, finibus lectus vitae, vehicula nibh. Cras hendrerit porta interdum. Pellentesque scelerisque consectetur urna, at porttitor ante scelerisque vel. Duis nunc nisl, cursus vel augue non, semper scelerisque eros. Phasellus vestibulum a nulla vel lacinia. Sed tristique at dolor vitae vehicula. Mauris rutrum tellus quis viverra pretium.
            Quisque feugiat nisi eget blandit molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ullamcorper est scelerisque mattis tempor. Nulla placerat, tellus et dictum viverra, neque diam tincidunt velit, a pellentesque massa mauris vel est. In pharetra leo nec dignissim ornare. Suspendisse nisl arcu, pharetra in dui vel, tempor fermentum diam. Pellentesque leo lectus, mollis non interdum eu, facilisis sed mi. Integer eu nisl quis nibh auctor porta. Curabitur ac vulputate magna. Vestibulum egestas finibus sapien sed dignissim. Duis fermentum nisl odio, sed porta purus egestas vel. Cras interdum feugiat tellus lobortis hendrerit. Fusce porttitor, lorem et vehicula iaculis, odio ipsum elementum erat, in scelerisque turpis augue eu neque.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies vulputate massa, in tempor nisl egestas at. Duis accumsan dui in augue faucibus malesuada. Nulla non erat sit amet ex iaculis tincidunt. Nulla feugiat lectus massa, sed egestas odio placerat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eu ante quis lacus fermentum lacinia. Morbi eu orci venenatis, finibus lectus vitae, vehicula nibh. Cras hendrerit porta interdum. Pellentesque scelerisque consectetur urna, at porttitor ante scelerisque vel. Duis nunc nisl, cursus vel augue non, semper scelerisque eros. Phasellus vestibulum a nulla vel lacinia. Sed tristique at dolor vitae vehicula. Mauris rutrum tellus quis viverra pretium.
            Quisque feugiat nisi eget blandit molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ullamcorper est scelerisque mattis tempor. Nulla placerat, tellus et dictum viverra, neque diam tincidunt velit, a pellentesque massa mauris vel est. In pharetra leo nec dignissim ornare. Suspendisse nisl arcu, pharetra in dui vel, tempor fermentum diam. Pellentesque leo lectus, mollis non interdum eu, facilisis sed mi. Integer eu nisl quis nibh auctor porta. Curabitur ac vulputate magna. Vestibulum egestas finibus sapien sed dignissim. Duis fermentum nisl odio, sed porta purus egestas vel. Cras interdum feugiat tellus lobortis hendrerit. Fusce porttitor, lorem et vehicula iaculis, odio ipsum elementum erat, in scelerisque turpis augue eu neque.
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
