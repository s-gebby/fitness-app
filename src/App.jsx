import { useState } from 'react'
import Hero from './components/hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'


function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')


  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout(poison, muscles, goal)
    setWorkout(newWorkout)
  }


  return (
    <main className='min-h-screen flex flex-col animate-gray-fluff text-white text sm sm:text-base'>
      <Hero />
      <Generator 
      poison={poison} 
      setPoison={setPoison} 
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}
      />
      {workout && (<workout workout={workout}/>) }
    </main>
  )
}

export default App
