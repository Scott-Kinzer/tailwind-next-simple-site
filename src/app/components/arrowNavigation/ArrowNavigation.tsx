/* eslint-disable no-unused-vars */
import React from 'react'

type Props = {
    degree: keyof typeof degreeConfig;
    onClick: () => void;
}

const increaseConfig = "before:w-[20px] before:content[''] before:translate-x-[-50%] before:translate-y-[-13%] before:h-[20px] before:left-[50%] before:absolute before:block";

const degreeConfig =  {
    0: 'rotate-0',
    180: 'rotate-180',
}

const Arrow = ({degree, onClick}: Props) => {
    return (
        <div onClick={onClick} className={`${degreeConfig[degree]} cursor-pointer ${increaseConfig}`}>
        <div className={`
        w-[2px]
        h-[15px]
        before:block
        before:relative 
        before:left-[-1.5px] 
        before:rotate-45 
        before:content-[''] 
        before:h-[6px] 
        before:w-[2px] 
        before:rounded-[1px]
        before:top-[-1px]
        before:bg-white 
        bg-white 
        after:bg-white
        after:block
        after:relative 
        after:left-[1.5px] 
        after:rotate-[-45deg] 
        after:content-[''] 
        after:h-[6px] 
        after:w-[2px] 
        after:rounded-[1px]
        after:top-[-7px]
    `}></div>
    </div>
    )
}

type ArrowNavProps = {
    up: () => void;
    down: () => void;
}

const ArrowNavigation = ({up, down}:ArrowNavProps) => {
  return (
        <div className={`fixed z-2 right-[20px] top-[40%]`}>
            <Arrow onClick={up} degree={0} />
            <div className='bg-white h-[120px] w-[2px] mt-[5px] mb-[5px]'>
            </div>
            <Arrow onClick={down} degree={180} />
        </div>
  )
}

export default ArrowNavigation