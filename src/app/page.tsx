"use client";

import './page.css';
import { useState, useEffect, useCallback, useRef, RefObject } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  const homepageContentRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  /*let lastTouchY: number | null = null;

  function scrollToElement(ref: RefObject<HTMLElement>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function onScroll(event: TouchEvent | WheelEvent) {
    const homepageTop = homepageContentRef.current ? homepageContentRef.current.getBoundingClientRect().top : 0;
    const heroTop = heroContentRef.current ? heroContentRef.current.getBoundingClientRect().top : 0;

    if (event instanceof WheelEvent) {
      // Scroll del mouse
      if (event.deltaY > 0) {
        console.log("Wheel scroll down → Fai qualcosa");
        console.log("home: " + homepageTop + "\nhero: " + heroTop)
        if (heroTop < 0 && homepageTop > 0) scrollToElement(homepageContentRef as RefObject<HTMLElement>);
      } else {
        console.log("Wheel scroll up → Fai qualcos'altro");
        console.log("home: " + homepageTop + "\nhero: " + heroTop)
        if (homepageTop > 0 && heroTop < 0) scrollToElement(heroContentRef as RefObject<HTMLElement>);
      }

    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0] || event.changedTouches[0];

      if (event.type === 'touchstart') {
        lastTouchY = touch.clientY;
      } else if (event.type === 'touchend' && lastTouchY !== null) {
        const deltaY = lastTouchY - touch.clientY;

        if (deltaY > 10) {
          console.log("Touch swipe up → Fai qualcosa");
          console.log("home: " + homepageTop + "\nhero: " + heroTop)
          if (heroTop < 0 && homepageTop > 0) scrollToElement(homepageContentRef as RefObject<HTMLElement>);
        } else {
          console.log("Touch swipe down → Fai qualcos'altro");
          console.log("home: " + homepageTop + "\nhero: " + heroTop)
          if (homepageTop > 0 && heroTop < 0) scrollToElement(heroContentRef as RefObject<HTMLElement>);
        }

        lastTouchY = null; // reset
      }
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', onScroll, { passive: true });
    window.addEventListener('touchstart', onScroll, { passive: true });
    window.addEventListener('touchend', onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchstart", onScroll);
      window.removeEventListener("touchend", onScroll);
    };
  }, [onScroll]);*/

  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const lastScrollYRef = useRef(0);

  const scrollToElement = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isAutoScrolling) return;

      const currentScrollY = window.scrollY;
      const homepageTop = homepageContentRef.current?.getBoundingClientRect().top ?? 0;
      const heroTop = heroContentRef.current?.getBoundingClientRect().top ?? 0;

      const goingDown = currentScrollY > lastScrollYRef.current;
      const goingUp = currentScrollY < lastScrollYRef.current;

      if (goingDown && heroTop < 0 && homepageTop > 0) {
        setIsAutoScrolling(true);
        scrollToElement(homepageContentRef as RefObject<HTMLElement>);
        setTimeout(() => setIsAutoScrolling(false), 500);
      } else if (goingUp && homepageTop > 0 && heroTop < 0) {
        setIsAutoScrolling(true);
        scrollToElement(heroContentRef as RefObject<HTMLElement>);
        setTimeout(() => setIsAutoScrolling(false), 500);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAutoScrolling]);

  return (
    <section className="homepage-section">

      <div ref={heroContentRef} id="hero-content" className="hero-content">
        <h1 className="hero-title fade-in-text">
          La piadina<br />dei nostri<br />antenati.
        </h1>
        <p className="hero-subtitle fade-in-text">
          <i>
            Fatta a mano come una volta.<br />
            E tanto altro ancora.
          </i>
        </p>
      </div>

      <div className="scroll-button-wrapper">
        <button onClick={() => { }} className={`pulse-button`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>

      <div ref={homepageContentRef} id="homepage-content" className="homepage-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat eros, efficitur ut purus nec, laoreet suscipit turpis. Fusce dignissim dictum metus ac blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce pellentesque malesuada pulvinar. Cras pellentesque pharetra ornare. Nam neque leo, auctor eu gravida eu, aliquet at tortor. Cras porta ipsum ultricies egestas convallis. Integer orci arcu, iaculis id cursus sed, placerat vehicula ligula.
        <br />
        Aliquam eget orci diam. Quisque eu lorem nec arcu tincidunt lacinia eget non dolor. In in laoreet dolor. Maecenas maximus ante eu dolor faucibus, vel dignissim magna blandit. Duis iaculis pretium lectus vitae molestie. Donec euismod sollicitudin suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ipsum ac purus dictum molestie ac vel elit. Maecenas at sodales lorem. Quisque aliquam finibus tortor pellentesque blandit. Donec vulputate ligula a sagittis porttitor. Integer dignissim ligula ut interdum dictum. Sed ultricies risus a diam feugiat facilisis. Aliquam non augue elementum elit egestas efficitur quis id neque.
        <br />
        Vestibulum nec felis sed turpis facilisis ultrices ut non est. Proin lacinia interdum tellus mollis congue. Suspendisse pretium sed est quis blandit. Nullam dapibus molestie quam sed pulvinar. Suspendisse a ligula magna. Pellentesque venenatis enim ac dolor dapibus semper. Vivamus justo mi, euismod ut mi id, euismod placerat nulla. Cras vestibulum orci ut libero iaculis, euismod mattis nulla pulvinar. Quisque pretium dapibus sagittis. Nulla vel cursus orci, dignissim euismod nisl. Nullam suscipit commodo blandit. Proin imperdiet ipsum a orci eleifend, sed molestie erat pulvinar. Vestibulum in lacus nec orci malesuada volutpat sed in sapien. Donec maximus libero et ipsum tempus, id blandit lectus convallis.
      </div>
    </section>
  );
}
