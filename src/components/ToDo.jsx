// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function ToDo() {
    return (

        <div style={{ borderBottom: "2px solid", marginBottom: "10px", paddingBottom: "10px" }}>
            <h1 className='font-bold text-center'>ToDo</h1>
            <form action="">
                <input type="text" placeholder='Enter City' className='border-2' /><button className='border-2 ms-4'>ADD</button>
            </form>
        </div>
    )
}
