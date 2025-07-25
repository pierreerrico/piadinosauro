"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";
import { faHome, faUtensils, faInfoCircle, faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeIcon from './home.svg'

const navItems = [
  { label: "Home", path: "/", icon: faHome },
  { label: "Menù", path: "/menu", icon: faUtensils },
  { label: "Chi siamo", path: "/chi-siamo", icon: faInfoCircle }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar-outer">
      <div className="navbar-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`navbar-link${pathname === item.path ? " active" : ""} flex-col items-center justify-center`}
          >
            <FontAwesomeIcon icon={item.icon} className="navbar-link-icon" />
            <span className="navbar-link-label">{item.label}</span>
          </Link>
        ))}
        <button type="button" className="navbar-link contacts flex-col items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="navbar-link-icon" />
          <span className="navbar-link-label">Contatti</span>
        </button>
      </div>

      <div className="navbar-logo">
        {/* DESKTOP: logo centrale */}
        <div className="navbar-logo-desktop">
          <img src="/logo_full.svg" alt="Logo" className="logo-img" />
        </div>

        {/* MOBILE: logo centrale */}
        {/*<div className="navbar-logo-mobile">
          <img src="/logo.svg" alt="Logo" className="logo-img" />
        </div>*/}
      </div>

      <div className="navbar-icons">
        <a href="tel:+393513488711" title="Telefono" target="_blank" rel="noopener noreferrer">
          <img src="/phone.svg" alt="Telefono" className="icon-img" />
        </a>
        <a href="https://www.instagram.com/il_piadinosauro/" title="Instagram" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" alt="Instagram" className="icon-img" />
        </a>
        <a href="https://www.facebook.com/p/Il-PiadinoSauro-100057216498997/" target="_blank" rel="noopener noreferrer" title="Facebook">
          <img src="/facebook.svg" alt="Facebook" className="icon-img" />
        </a>
      </div>
    </nav>
  );
}
