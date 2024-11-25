import React from 'react'

const Header = ({ title }) => {
    return (
        <div className='text-center'>
            <p className='inline-block bg-white px-16 py-3 my-8 rounded-[20px] text-[#0060E4] font-bold text-3xl'>{title}</p>
        </div>
    )
}

export default Header