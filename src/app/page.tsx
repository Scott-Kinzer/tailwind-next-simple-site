'use client';

import { useEffect, useRef, useState } from 'react';

import ArrowNavigation from './components/arrowNavigation/ArrowNavigation';
import { useWindowSize } from './hooks/useResize';
import AboutSection from './sections/about/AboutSection';
import ContactSection from './sections/contact/ContactSection';
import IntroSection from './sections/intro/IntroSection';
import ServicesSection from './sections/services/ServicesSection';
import { MouseEvent } from './types/types';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);

  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [introRef, aboutRef, servicesRef, contactRef];

  const handleSwipe = () => {
    const swipeDistance = touchStartY - touchEndY;

    if (swipeDistance > 100 && activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1);
    } else if (swipeDistance < -100 && activeSection > 0) {
      setActiveSection(activeSection - 1);
    }

    setTouchStartY(0);
    setTouchEndY(0);
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setTouchStartY(event.clientY);
  };

  const handleMouseUp = (event: MouseEvent<HTMLDivElement>) => {
    setTouchEndY(event.clientY);
  };

  useWindowSize(sections, activeSection);

  useEffect(() => {
    sections[activeSection]?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [activeSection]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(handleSwipe, [touchEndY]);

  return (
    <main className="">
      <IntroSection
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        introRef={introRef}
        setActiveSection={setActiveSection}
      />
      <AboutSection
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        aboutRef={aboutRef}
      />
      <ServicesSection
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        servicesRef={servicesRef}
      />
      <ContactSection
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
        contactRef={contactRef}
      />
      <ArrowNavigation
        down={() => {
          if (activeSection < sections.length - 1) {
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
