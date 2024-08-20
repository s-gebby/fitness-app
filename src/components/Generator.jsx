import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2 justify-center'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800'>{index}</p>
        <h4 className='text-xl sm:text-text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator() {
  const [showModal, setShowModal] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState('strength_power')


  // let showModal = false (using state variable instead)

  function toggleModal() {
    setShowModal(!showModal)
  }

  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button className='bg-slate-950 border border-lime-300 py-4 rounded-lg hover:border-lime-800' key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_'," ")}</p>
            </button>
          )
      })}
      </div>
      <Header index={'02'} title={'Lock on Targets'} description={"Select the muscles for complete annihilation."}/>
      <div className='bg-slate-950 border border-solid border-lime-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div>
            Modal
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
