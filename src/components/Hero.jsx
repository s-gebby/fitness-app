import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center [max-w-600px] w-full mx-auto p-6'>
        <div className='flex flex-col gap-4'></div>

        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl
        sm:text-5xl md:text-6xl
        lg:text-7xl'><span className='text-sky-400'>JACKED</span></h1>
        <p className='text-sm md:text-base font-light'>I hereby ackowledge that I may become <span className='text-sky-300 font-medium'>unbelievably swole</span> and accept all risks of becoming the local <span className='text-sky-300 font-medium'>mass monstrosity!</span>
        </p>
        <Button func={() => {
          window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>
    </div>
  )
}
