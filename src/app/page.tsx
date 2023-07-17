'use client';

import { useEffect, useRef, useState } from 'react';

import Header from './components/header/Header';
import IntroSection from './sections/intro/IntroSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);

  const totalSections = 2;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const handleMouseDown = (event: any) => {
    setTouchStartY(event.clientY);
  };

  const handleMouseUp = (event: any) => {
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
    const arr = [ref1, ref2];
    arr[activeSection].current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [activeSection]);

  return (
    <main className="">
      <div
        ref={ref1}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="relative h-screen	overflow-hidden bg-turquoise">
        <div
          className="absolute left-1/2 
        h-screen w-1/2 
        bg-black 
        opacity-80 
        before:absolute 
        before:left-[-25%] 
        before:top-[-5%] 
        before:h-heightUp 
        before:w-[50%] 
        before:rounded-half 
        before:bg-black
        before:content-['']"></div>
        <Header />
        <IntroSection />
      </div>
    </main>
  );
}
