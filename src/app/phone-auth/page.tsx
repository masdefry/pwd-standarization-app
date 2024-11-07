'use client';
import { useRef } from 'react';

export default function PhoneAuthPage() {
    const inputOtp1 = useRef<HTMLInputElement>(null);
    const inputOtp2 = useRef<HTMLInputElement>(null);
    const inputOtp3 = useRef<HTMLInputElement>(null);
    const inputOtp4 = useRef<HTMLInputElement>(null);

  const handleInputOtp = (currentInput: any) => {
    // Automatically move to the next input if a digit is entered
    if (currentInput === 1 && inputOtp1?.current?.value) {
      inputOtp2?.current?.focus();
    } else if (currentInput === 2 && inputOtp2?.current?.value) {
      inputOtp3?.current?.focus();
    } else if (currentInput === 3 && inputOtp3?.current?.value) {
      inputOtp4?.current?.focus();
    }
  };

  return (
    <main>
      <section className='flex justify-center gap-10 p-10'>
        <input type='text' placeholder='Type your phone number' className='input input-bordered w-1/2' />
        <button className='btn bg-red-500 text-white'>
          Send OTP
        </button>
      </section>
      <section className='flex justify-center gap-3 p-10'>
        <div className='flex gap-3'>
          <input
            type='text'
            ref={inputOtp1}
            onChange={() => handleInputOtp(1)}
            maxLength={1}
            className='input input-bordered w-[50px] text-center'
          />
          <input
            type='text'
            ref={inputOtp2}
            onChange={() => handleInputOtp(2)}
            maxLength={1}
            className='input input-bordered w-[50px] text-center'
          />
          <input
            type='text'
            ref={inputOtp3}
            onChange={() => handleInputOtp(3)}
            maxLength={1}
            className='input input-bordered w-[50px] text-center'
          />
          <input
            type='text'
            ref={inputOtp4}
            onChange={() => handleInputOtp(4)}
            maxLength={1}
            className='input input-bordered w-[50px] text-center'
          />
        </div>
        <button className='btn bg-red-500 text-white w-xs'>
          Submit
        </button>
      </section>
    </main>
  );
}
