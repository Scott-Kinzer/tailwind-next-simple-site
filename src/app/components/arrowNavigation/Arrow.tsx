import React from 'react'

import { degreeConfig, increaseConfig } from './config';

type Props = {
    degree: keyof typeof degreeConfig;
    onClick: () => void;
}

const Arrow = ({degree, onClick}: Props) =>  (
        <div className={`${degreeConfig[degree]} ${increaseConfig} cursor-pointer`} onClick={onClick}>
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

export default Arrow;