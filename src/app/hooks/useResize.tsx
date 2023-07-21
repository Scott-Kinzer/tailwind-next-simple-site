import { useState, useEffect, RefObject } from 'react';

export function useWindowSize(
  sections: RefObject<HTMLDivElement>[],
  activeSection: number
) {
  useEffect(() => {
    function handleResize() {
      sections[activeSection]?.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection, sections]);
}
