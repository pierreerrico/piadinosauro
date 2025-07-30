'use client';
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

const AppContext = createContext<{
    currentSlide: string;
    setCurrentSlide: (slide: string) => void;
    isScrolled: boolean;
    setIsScrolled: (scrolled: boolean) => void;
    slideNames: string[];
}>({
    currentSlide: 'Home',
    setCurrentSlide: () => {
        console.warn('setCurrentSlide called without a provider');
    },
    isScrolled: false,
    setIsScrolled: () => {
        console.warn('setIsScrolled called without a provider');
    },
    slideNames: ['Home', 'Menu', 'About', 'Contact'],
});

export function AppProvider({ children }: { children: ReactNode }) {
    const [currentSlide, setCurrentSlide] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const slideNames = ['Home', 'Menu', 'About', 'Contact'];

    return (
        <AppContext.Provider value={{ currentSlide, setCurrentSlide, isScrolled, setIsScrolled, slideNames }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}