"use client";

import './page.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  const homepageContentRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [triggeredDown, setTriggeredDown] = useState(false);
  const [triggeredUp, setTriggeredUp] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const onScroll = useCallback(() => {
    const y = window.scrollY;

    if (isAutoScrolling) return; // blocca ogni trigger mentre stai già scrollando

    if (y > 30 && !triggeredDown && homepageContentRef.current) {
      scrollToHomepage();
    }

    if (y < 750 && !triggeredUp && heroContentRef.current) {
      setIsAutoScrolling(true);
      heroContentRef.current.scrollIntoView({ behavior: "smooth" });
      setTriggeredDown(false);
      setTriggeredUp(true);
      setTimeout(() => setIsAutoScrolling(false), 500);
    }
  }, [triggeredDown, triggeredUp, isAutoScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: false });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollToHomepage = () => {
    setIsAutoScrolling(true);
    homepageContentRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTriggeredDown(true);
    setTriggeredUp(false);
    setTimeout(() => setIsAutoScrolling(false), 500);
  };

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
        <button onClick={scrollToHomepage} className={`pulse-button ${triggeredDown ? 'opacity-0 scale-100' : 'opacity-100 scale-100'}`}>
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
