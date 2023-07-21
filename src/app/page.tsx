'use client';

import { useEffect, useRef, useState } from 'react';

import ArrowNavigation from './components/arrowNavigation/ArrowNavigation';
import { useWindowSize } from './hooks/useResize';
import AboutSection from './sections/about/AboutSection';
import IntroSection from './sections/intro/IntroSection';
import { MouseEvent } from './types/types';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const sections = [introRef, aboutRef];
  const totalSections = 2;

  useWindowSize(sections, activeSection);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setTouchStartY(event.clientY);
  };

  const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    setTouchEndY(event.clientY);
  };

  useEffect(() => {
    handleSwipe();
  }, [touchEndY]);

  const handleSwipe = () => {
    const swipeDistance = touchStartY - touchEndY;

    if (swipeDistance > 100 && activeSection < totalSections - 1) {
      setActiveSection(activeSection + 1);
    } else if (swipeDistance < -100 && activeSection > 0) {
      setActiveSection(activeSection - 1);
    }

    setTouchStartY(0);
    setTouchEndY(0);
  };

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      sections[activeSection]?.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection]); // Empty array ensures that effect is only run on mount

  // useEffect(() => {
  //   sections[activeSection]?.current?.scrollIntoView({
  //     behavior: 'smooth',
  //   });
  // }, [activeSection]);

  return (
    <main className="">
      <IntroSection
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        introRef={introRef}
      />
      <AboutSection
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        introRef={aboutRef}
      />
      <ArrowNavigation
        down={() => {
          if (activeSection < totalSections - 1) {
            setActiveSection(section => section + 1);
          }
        }}
        up={() => {
          if (activeSection > 0) {
            setActiveSection(section => section - 1);
          }
        }}
      />
    </main>
  );
}
