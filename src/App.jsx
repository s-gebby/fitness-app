import { useState } from 'react'
import Hero from './components/hero'
import Generator from './components/Generator'
import Workout from './components/Workout'


function App() {
  
  return (
    <main className='min-h-screen flex flex-col animate-gray-fluff text-white text sm sm:text-base'>
      <Hero />
      <Generator />
      <Workout />
    </main>
  )
}

export default App
