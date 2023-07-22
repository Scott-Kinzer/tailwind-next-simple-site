/* eslint-disable @next/next/no-img-element */
import React, { RefObject, useState } from 'react';

import ServicesModal from '@/app/components/modal/ServicesModal';
import { MouseEvent } from '@/app/types/types';

type Props = {
  handleMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  handleMouseUp: (event: MouseEvent<HTMLDivElement>) => void;
  servicesRef: RefObject<HTMLDivElement>;
};

const SERVICE_SECTION_DATA = [
  {
    title: 'service 1',
    text: 'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom',
    image: './images/services/line-chart.png',
  },
  {
    title: 'service 2',
    text: 'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom',
    image: './images/services/handshake.png',
  },
  {
    title: 'service 3',
    text: 'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom',
    image: './images/services/redo.png',
  },
];

export type ModalService = {
  image: string;
  title: string;
  text: string;
};

const ServicesSection = ({
  servicesRef,
  handleMouseDown,
  handleMouseUp,
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState<ModalService | null>(null);

  return (
    <div className="relative">
      <div
        ref={servicesRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="relative h-screen overflow-hidden bg-turquoise">
        <div
          className="
        absolute left-[-200px]
        top-[-100px]
        h-[570px] 
        w-[570px]
        rounded-full 
        bg-black 
        opacity-80"></div>
        <div
          className="
        absolute bottom-[-100px]
        right-[-200px]
        h-[570px] 
        w-[570px]
        rounded-full 
        bg-black 
        opacity-80"></div>
        <h1 className=" z-2 relative mt-5 text-center text-6xl font-bold text-white underline underline-offset-8 a:text-4xl b:text-xl">
          Services
        </h1>
        <div
          className={`z-2 relative grid h-[100%] grid-cols-services content-evenly justify-center gap-[30px] pl-[100px] pr-[100px] c:mt-[10px] c:grid-cols-servicesMedium c:content-baseline e:grid-cols-serviesSmall`}>
          {SERVICE_SECTION_DATA.map(sectionData => {
            return (
              <div
                key={sectionData.title}
                className="text[20px] m-auto box-border rounded-lg bg-serviceCard pb-[10px] pl-[50px] pr-[50px] pt-[20px] e:pl-[15px] e:pr-[15px]">
                <p className="m-auto text-center text-[25px] text-white">
                  {sectionData.title}
                </p>
                <img
                  className="m-auto mt-[30px] c:mt-[10px]  c:w-[50px]"
                  src={sectionData.image}
                  alt="chart"
                />
                <p className="mt-[20px]  text-center text-3xl text-white b:text-lg c:hidden c:text-[10px] c:text-sm">
                  {sectionData.text}
                </p>
                <button
                  onClick={() => {
                    setIsOpenModal(true);
                    setModalData(sectionData);
                  }}
                  className=" m-auto mt-[50px] block h-[90px] w-[300px] rounded-3xl bg-darkBlue text-[30px] text-white a:h-[45px] a:w-[150px] a:text-[15px] c:mt-[10px] c:h-[30px] c:text-[10px]">
                  Button
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {isOpenModal && modalData && (
        <ServicesModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          modalData={modalData}
        />
      )}
    </div>
  );
};

export default ServicesSection;
