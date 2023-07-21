/* eslint-disable @next/next/no-img-element */
import React, { RefObject } from 'react';

import Image from 'next/image';

import Header from '@/app/components/header/Header';
import { MouseEvent } from '@/app/types/types';

type Props = {
  handleMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  handleMouseUp: (event: MouseEvent<HTMLDivElement>) => void;
  introRef: RefObject<HTMLDivElement>;
};

const AboutSection = ({ introRef, handleMouseDown, handleMouseUp }: Props) => {
  return (
    <div
      ref={introRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative h-screen overflow-hidden bg-turquoise">
      <div
        className="
        absolute right-1/2 
        h-screen w-1/2 
        bg-black 
        opacity-80 
        after:absolute 
        after:left-[-25%] 
        after:top-[-5%] 
        after:h-heightUp 
        after:w-[50%] 
        after:rounded-half 
        after:bg-black
        after:content-['']"></div>
      <div className="z-2 relative grid h-[100%] grid-cols-intro content-evenly pl-[15px] pr-[100px]">
        <div>
          <h1 className="text-6xl font-bold text-white a:text-4xl b:text-xl">
            WELCOME TO OUR SITE
          </h1>
          <div className="mt-[76px] text-2xl text-white a:mt-[30px] a:text-xl b:text-sm">
            Everyone has the right to freedom of thought, conscience and
            religion; this right includes freedom to change his religion or
            belief.Everyone has the right to freedom of thought, conscience and
            religion.
          </div>
          <button className="mt-[50px] h-[90px] w-[300px] rounded-3xl bg-darkBlue text-[30px] text-white a:h-[45px] a:w-[150px] a:text-[15px]">
            Get started
          </button>
          <div className="mt-[50px] grid w-[50%] grid-cols-3 c:mt-[20px]"></div>
        </div>
        <div>
          <img
            className="ml-auto h-[500px] w-[500px] a:h-[300px] a:w-[300px]"
            src="/images/intro/human-light.png"
            alt="human"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
