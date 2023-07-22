import React, { useEffect, useRef, useState } from 'react';

import useOutsideClick from '@/app/hooks/useOutsideClick';
import { ModalService } from '@/app/sections/services/ServicesSection';

type Props = {
  isOpenModal: boolean;
  modalData: ModalService;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ServicesModal = ({ isOpenModal, modalData, setIsOpenModal }: Props) => {
  const [isOpenModalLocal, setIsOpenModalLocal] = useState(false);
  const [isAllowToCloseModal, setIsAllowToCloseModal] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpenModalLocal(false);
    setIsAllowToCloseModal(true);
  };

  useOutsideClick(modalRef, closeModal);

  useEffect(() => {
    if (isOpenModal) {
      setIsOpenModalLocal(true);
    }
  }, [isOpenModal]);

  useEffect(() => {
    if (!isOpenModalLocal && isAllowToCloseModal) {
      setTimeout(() => {
        setIsOpenModal(false);
      }, 150);
    }
  }, [isAllowToCloseModal, isOpenModalLocal, setIsOpenModal]);

  return (
    <div
      ref={modalRef}
      className={`z-4 absolute ${
        isOpenModalLocal ? 'translate-y-[100%]' : 'translate-y-[200%]'
      } top-0 h-[50vh] w-screen bg-serviceModal transition-transform`}>
      <div className="grid h-[100%] grid-cols-serviceModal content-evenly">
        <div className="m-auto">{modalData.title}</div>
        <div className="m-auto">{modalData.text}</div>
        <img className="m-auto" src={modalData.image} alt={modalData.text} />
      </div>
      <div
        onClick={closeModal}
        className="absolute right-[50px] top-[20px] cursor-pointer">
        <div className="h-[30px] w-[10px] rotate-45 rounded-sm bg-black"></div>
        <div className="absolute top-0 h-[30px] w-[10px] rotate-[-45deg] rounded-sm bg-black"></div>
      </div>
    </div>
  );
};

export default ServicesModal;
