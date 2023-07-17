/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from 'next/image'

import { SOCIAL_ICONS } from './data/intro.data'

const IntroSection = () => {
  return (
    <div className="z-2 relative mt-[100px] grid grid-cols-intro pl-[15px] pr-[100px] c:mt-[30px]">
    <div>
      <h1 className="text-6xl font-bold text-white a:text-4xl b:text-xl">
        WELCOME TO OUR SITE
      </h1>
      <div className="mt-[76px] text-2xl text-white a:mt-[30px] a:text-xl b:text-sm">
        Everyone has the right to freedom of thought, conscience and
        religion; this right includes freedom to change his religion or
        belief.Everyone has the right to freedom of thought, conscience
        and religion.
      </div>
      <button className="mt-[50px] h-[90px] w-[300px] rounded-3xl bg-darkBlue text-[30px] text-white a:h-[45px] a:w-[150px] a:text-[15px]">
        Get started
      </button>
      <div className="mt-[50px] grid w-[50%] grid-cols-3 c:mt-[20px]">
        {SOCIAL_ICONS.map((icon) => {
            return (
                <Image
                key={icon.alt}
                className="b:h-[30px] b:w-[30px]"
                priority
                src={icon.iconSvg}
                alt={`Follow us on ${icon.alt}`}
              />
            )
        })}
      </div>
    </div>
    <div className="">
      <img
        className="ml-auto h-[500px] w-[500px] a:h-[300px] a:w-[300px]"
        src="/images/intro/human-light.png"
        alt="human"
      />
    </div>
  </div>
  )
}

export default IntroSection