// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'


function Counter() {

    const [counter, setcounter] = useState(0);

    const addValue = () => {
        // if (counter < 5) {
        //     setcounter(counter + 1);

        // } 
        setcounter(counter + 1);
    }
    const removeValue = () => {
        if (counter > 0) {
            setcounter(counter - 1)
        }
        // else {
        //     console.log("Not to run")
        // }

    }

    return (
        <div>
            <h2 className='pb-2 text-center font-bold'>Counter</h2>
            <button className='border-2 p-1 px-4 me-2 bg-green-500' onClick={addValue}>Add </button>
            <button className='border-2 p-1 px-4 bg-green-300' onClick={removeValue}>Sub</button>
            <p className='pt-2'>Result : {counter}</p>

        </div>

    )
}

export default Counter