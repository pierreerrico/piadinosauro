'use client';
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

const ScrollContext = createContext<{
  isScrolled: boolean;
  setIsScrolled: (value: boolean) => void;
}>({
  isScrolled: false,
  setIsScrolled: () => {},
});

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  /*const onScroll = useCallback(() => {
      const isScrolled = window.scrollY > 0 || window.pageYOffset > 0 && !(document.body.style.overflow === 'hidden');
      setIsScrolled(isScrolled);
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
  
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, [onScroll]);*/

  return (
    <ScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
