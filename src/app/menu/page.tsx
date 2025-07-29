'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './page.css'; // Assicurati che questo file esista
import { useLayoutEffect } from 'react';
import { useScroll } from '../scrollContext';

export default function MenuPage() {
  const { isScrolled, setIsScrolled } = useScroll();

  useLayoutEffect(() => {
    // Eseguito *prima* del paint
    document.body.style.overflow = 'hidden';

    return () => {
      // Cleanup al dismount
      document.body.style.overflow = '';
    };
  }, []);

  const slideCount = 6;

  return (
    <main className="menu-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}">${index + 1}</span>`, 
        }}
        mousewheel
        keyboard
        loop={true}
        className="menu-swiper"
        onSlideChange={(swiper) => { 
          console.log('Slide changed to:', swiper.activeIndex);
          setIsScrolled(false);
        }}
      >
        {Array.from({ length: slideCount }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="menu-slide">
              <img
                src={`/menu/menu-${i + 1}.jpg`}
                alt={`Menù pagina ${i + 1}`}
                className="menu-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
