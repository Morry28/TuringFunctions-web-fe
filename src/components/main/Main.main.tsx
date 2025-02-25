import React from 'react'
import Landing from './Landing.main'
export default function Main(){


    return (
        <div className='bg-PM w-full h-screen flex flex-col'>
            <div className='flex'>
            <span className='w-12 h-12 bg-PM'></span>
            <span className='w-12 h-12 bg-PMS'></span>
            <span className='w-12 h-12 bg-SC'></span>
            <span className='w-12 h-12 bg-SCS'></span>
            <span className='w-12 h-12 bg-TC'></span>
            <span className='w-12 h-12 bg-TCS'></span>
            <span className='w-12 h-12 bg-AC'></span>
            <span className='w-12 h-12 bg-ACS'></span>
            <span className='w-12 h-12 bg-SA'></span>
            <span className='w-12 h-12 bg-SAS'></span>
            </div>
            <div className=''>
                <Landing/>

            </div>
        </div>
    )

    
}