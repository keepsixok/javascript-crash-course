"use client"
import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
// MAKE THESE INTO POST FUNCTIONS 
    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    const resetCount =() => {
        setCount(0)
    }

  return (

        <div className='flex-col justify-center w-40 p-4 mt-8 bg-slate-200 rounded-xl'>

            <h1 className='flex justify-center text-2xl '>Count: {count}</h1> 
            <button className='mt-2 rounded-lg w-32 text-center  bg-blue-500 text-white font-bold p-2 hover:bg-blue-400' onClick={incrementCount}>Increment</button>
            <button className='mt-2 rounded-lg w-32 text-center bg-red-500 text-white font-bold p-2 hover:bg-red-400' onClick={decrementCount}>Decrement</button>
            <button className='mt-2 rounded-lg w-32 text-center bg-green-500 text-white font-bold p-2 hover:bg-green-400' onClick={resetCount}>Reset</button>
            
       
        </div>
  )
}

export default Counter