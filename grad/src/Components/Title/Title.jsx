import React from 'react'
import './title.css'
const Title = ({ title }) => {
    return (
        <div className='text-center relative '>
            <p className='mt-32 mb-16 px-8 py-1 font-medium text-[64px] text-[#0060E4] inline-block relative title'>
                <div className='title-two'>   {title} </div>
            </p>
        </div>
    )
}

export default Title