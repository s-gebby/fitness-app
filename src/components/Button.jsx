import React from 'react'

export default function Button(props) {
    const { text } = props
  
    return (
        <button className='px-8 mx-auto py-4 border-[2px] bg-slate-950 border-sky-400 border-solid greenShadow duration-200 rounded-lg'>
            <p>{text}</p>
        </button>  
    )
}
