import { useState, useEffect, RefObject } from 'react';

export const useWindowSize = (
  sections: RefObject<HTMLDivElement>[],
  activeSection: number
) => {
  useEffect(() => {
    function handleResize() {
      sections[activeSection]?.current?.scrollIntoView();
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection, sections]);
};
