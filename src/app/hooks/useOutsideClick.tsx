import { RefObject, useEffect } from 'react';

const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      console.log('xxx');
      if (!ref?.current?.contains(event.target as Node)) {
        const htmlElement = event.target as HTMLElement;

        if (htmlElement.nodeName !== 'HTML') {
          callback();
        }
      }
    };

    document.body.addEventListener('mousedown', clickOutside);

    return () => {
      document.body.removeEventListener('mousedown', clickOutside);
    };
  }, [callback, ref]);
};

export default useOutsideClick;
