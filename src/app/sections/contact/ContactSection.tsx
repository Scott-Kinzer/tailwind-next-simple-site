/* eslint-disable @next/next/no-img-element */
import { useFormik } from 'formik';
import React, { RefObject } from 'react';
import * as Yup from 'yup';

import { MouseEvent } from '@/app/types/types';

type Props = {
  handleMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  handleMouseUp: (event: MouseEvent<HTMLDivElement>) => void;
  contactRef: RefObject<HTMLDivElement>;
};

const ContactSection = ({
  contactRef,
  handleMouseDown,
  handleMouseUp,
}: Props) => {
  const formik = useFormik({
    initialValues: {
      message: '',
      password: '',
      email: '',
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: Yup.object({
      message: Yup.string().required('Message is required').min(8).max(12),
      password: Yup.string().required('Password is required').min(8).max(12),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const isButtonDisabled =
    formik.errors.email || formik.errors.message || formik.errors.password;

  return (
    <div
      ref={contactRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative h-screen	overflow-hidden bg-turquoise">
      <div className="grid h-screen grid-cols-contact">
        <div className="grid bg-white">
          <img
            className="m-auto h-[300px]"
            src="/images/contact/standing.png"
            alt="standing-human"
          />
        </div>
        <div className="bg-turquoise">
          <h1 className=" z-2 relative mt-5 text-center text-6xl font-bold text-white underline underline-offset-8 a:text-4xl b:text-xl">
            Contact
          </h1>

          <form
            onSubmit={formik.handleSubmit}
            className="m-auto mt-[30px] grid max-w-[500px] pl-[10px] pr-[30px]"
            action="">
            <div className="relative pb-[30px]">
              <input
                className="w-[100%] rounded p-[10px]"
                placeholder="@email......"
                type="text"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="absolute bottom-1">{formik.errors.email}</div>
              )}
            </div>
            <div className="relative pb-[30px]">
              <input
                className="w-[100%] rounded p-[10px]"
                placeholder="Password..."
                id="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="absolute bottom-1">
                  {formik.errors.password}
                </div>
              )}
            </div>
            <div className="relative pb-[30px]">
              <textarea
                className="w-[100%] rounded p-[10px]"
                placeholder="Message....."
                id="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                cols={30}
                rows={10}></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="absolute bottom-1">{formik.errors.message}</div>
              )}
            </div>
            <button
              type="submit"
              disabled={!!isButtonDisabled}
              className={`m-auto mt-[50px] block h-[90px] w-[300px] rounded-3xl ${
                isButtonDisabled ? 'bg-gray-500' : 'bg-darkBlue'
              }  text-[30px] text-white a:h-[45px] a:w-[150px] a:text-[15px] c:mt-[10px] c:h-[30px] c:text-[10px]`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
