/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'

function StopWatchTimer() {
    // eslint-disable-next-line no-unused-vars
    const [timer, setTimer] = useState(0)

    // start time
    const StartTime = () => {
        window.myTimer = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000)
    }

    // stop time

    const StopTime = () => {
        clearInterval(window.myTimer);

    }

    // Reset timer
    const resetTimer = () => {
        clearInterval(window.myTimer);
        setTimer(0);
    };



    return (
        <div style={{ borderBottom: "2px solid", marginBottom: "10px", paddingBottom: "10px" }}>
            <h2 className='font-bold'>StopWatchTimer</h2>
            <h1 style={{ textAlign: "center" }} className='font-bold'>Timer</h1>
            <div className='pt-4'>
                <span>{Math.trunc(timer / 60)} mins </span>
                <span>{timer % 60} secs</span>
            </div>

            <div className='flex gap-8 pt-5'>
                <button className='border-2 py-2 px-4 bg-green-500' onClick={StartTime}>Start</button>
                <button className='border-2 py-2 px-4 bg-red-500' onClick={StopTime}>Stop</button>
                <button className='border-2 py-2 px-4 bg-yellow-300 ' onClick={resetTimer}>Reset</button>
            </div>

        </div>
    )
}

export default StopWatchTimer