import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center [max-w-600px] w-full mx-auto p-6'>
        <div className='flex flex-col gap-4'></div>

        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl
        sm:text-5xl md:text-6xl
        lg:text-7xl'>Swole<span className='text-blue-400'>normous</span></h1>
        <p className='text-sm md:text-base font-light'>I hereby ackowledge that I may become <span className='text-blue-400 font-medium'>unbelievably jacked</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass monstrosity</span>, afflicted with severe body dismorphia, and unable to fit through doors.
        </p>
        <button className='px-8 py-4 border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200 rounded-lg'>
            <p>ACCEPT & BEGIN</p>
        </button>
    </div>
  )
}
