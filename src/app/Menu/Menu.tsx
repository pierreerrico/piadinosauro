'use client';

import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Menu.css';

const Menu = forwardRef<HTMLElement, {}>((props, ref) => {
  const slideCount = 6;

  return (
    <main className='menu-wrapper'>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}">${index + 1}</span>`, 
        }}
        mousewheel
        keyboard
        loop={true}
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
});

Menu.displayName = 'Menu';

export default Menu;

