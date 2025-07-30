"use client";

import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faInfoCircle,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../AppContext";
import "./Navbar.css";

export default function Navbar({ swiperRef }: { swiperRef: React.RefObject<any> }) {
  const { currentSlide, setCurrentSlide } = useAppContext();
  const slideNames = useAppContext().slideNames;

  const navRef = useRef<HTMLElement[]>([]);
  const [indicatorPosition, setIndicatorPosition] = useState(138.5);

  const navItems = [
    { label: "Home", id: slideNames[0], icon: faHome },
    { label: "Menù", id: slideNames[1], icon: faUtensils },
    { label: "Chi siamo", id: slideNames[2], icon: faInfoCircle },
    { label: "Contatti", id: slideNames[3], icon: faUser }
  ];

  const handleNavClick = (slideId: string) => {
    const index = navItems.findIndex((item) => item.id === slideId);
    if (index !== -1) {
      swiperRef.current?.slideTo(index);
      setCurrentSlide(slideId);
      const indicator = navRef.current[index];
      let position = indicator.getBoundingClientRect().left + indicator.getBoundingClientRect().width / 2;
      setIndicatorPosition(position);
    }
  };

  return (
    <nav className="navbar-outer">
      <div className="navbar-links">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            data-id={id}
            className={`navbar-link ${currentSlide === id ? " active" : ""
              }`}
            onClick={() => handleNavClick(id)}
            ref={(el) => {
              const index = navItems.findIndex((item) => item.id === id);
              if (el) navRef.current[index] = el;
            }}
            type="button"
          >
            <FontAwesomeIcon icon={icon} className="navbar-link-icon" />
            <div className="navbar-label">{label}</div>
          </button>
        ))}
      </div>
      <div className="navbar-indicator" style={{ left: indicatorPosition }} />

      <div className="navbar-logo">
        <div className="navbar-logo-desktop">
          <img src="/logo_full.svg" alt="Logo" className="logo-img" />
        </div>
      </div>

      <div className="navbar-icons">
        <a
          href="tel:+393513488711"
          title="Telefono"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/phone.svg" alt="Telefono" className="icon-img" />
        </a>
        <a
          href="https://www.instagram.com/il_piadinosauro/"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.svg" alt="Instagram" className="icon-img" />
        </a>
        <a
          href="https://www.facebook.com/p/Il-PiadinoSauro-100057216498997/"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <img src="/facebook.svg" alt="Facebook" className="icon-img" />
        </a>
      </div>
    </nav>
  );
}
