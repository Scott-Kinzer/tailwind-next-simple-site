/* eslint-disable @next/next/no-img-element */
import React, { RefObject } from 'react';

import { MouseEvent } from '@/app/types/types';

type Props = {
  handleMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  handleMouseUp: (event: MouseEvent<HTMLDivElement>) => void;
  aboutRef: RefObject<HTMLDivElement>;
};

const AboutSection = ({ aboutRef, handleMouseDown, handleMouseUp }: Props) => {
  return (
    <div
      ref={aboutRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative h-screen overflow-hidden bg-turquoise">
      <div
        className="
        absolute
        h-screen w-[40%]
        bg-black 
        opacity-80 
        after:absolute 
        after:right-[-20%] 
        after:top-[-5%] 
        after:h-heightUp 
        after:w-[50%] 
        after:rounded-half 
        after:bg-black
        after:content-['']"></div>
      <h1 className=" z-2 relative mt-5 text-center text-6xl font-bold text-white underline underline-offset-8 a:text-4xl b:text-xl">
        About
      </h1>
      <div className="z-2 relative grid h-[100%] grid-cols-about content-evenly pl-[50px] pr-[100px]">
        <div>
          <img
            className="h-[500px] w-[500px] a:h-[300px] a:w-[300px]"
            src="/images/about/walk.png"
            alt="walk-human"
          />
        </div>
        <div>
          <div className="mt-[76px] text-2xl text-white a:mt-[30px] a:text-xl b:text-sm">
            Everyone has the right to freedom of thought, conscience and
            religion; this right includes freedom to change his religion or
            belief.Everyone has the right to freedom of thought, conscience and
            religion; this right includes freedom to change his religion or
            belief.Everyone has the right to freedom of thought, conscience and
            religion; this right includes freedom to change his religion or
            belief.
          </div>
          <button className="mt-[50px] h-[90px] w-[300px] rounded-3xl bg-darkBlue text-[30px] text-white a:h-[45px] a:w-[150px] a:text-[15px]">
            Button
          </button>
          <div className="mt-[50px] grid w-[50%] grid-cols-3 c:mt-[20px]"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
