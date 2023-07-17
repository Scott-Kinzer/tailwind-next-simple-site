'use client';

import { useEffect, useRef, useState } from 'react';

import ArrowNavigation from './components/arrowNavigation/ArrowNavigation';
import IntroSection from './sections/intro/IntroSection';
import { MouseEvent } from './sections/intro/types/types';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const totalSections = 2;

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
    const arr = [introRef, ref2];
    arr[activeSection]?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [activeSection]);

  return (
    <main className="">
      <IntroSection
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        introRef={introRef}
      />
      <IntroSection
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        introRef={ref2}
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
