import React, { useEffect, useRef, useState } from 'react';

import useOutsideClick from '@/app/hooks/useOutsideClick';

type Props = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ServicesModal = ({ isOpenModal, setIsOpenModal }: Props) => {
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
      className={`z-3 absolute ${
        isOpenModalLocal ? 'translate-y-1/2' : 'translate-y-full'
      } top-0 h-screen w-screen bg-white transition-transform`}>
      Test
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
