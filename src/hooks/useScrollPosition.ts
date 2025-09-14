"use client";

import { useState, useEffect } from 'react';

export const useScrollPosition = (threshold: number = 100) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > threshold);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Check initial position
        handleScroll();

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isScrolled;
};