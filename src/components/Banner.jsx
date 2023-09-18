import React from 'react';

export default function Banner() {
  return (
    <section className='h-96 bg-black relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-60'></div>
      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='text-4xl md:text-6xl text-gray-100'>Unlock Typing Excellence</h2>
        <p className='text-3xl md:text-5xl'>Your Perfect Keyboard Awaits</p>
      </div>
    </section>
  );
}
