import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeBox2 = ({ img, text, secondText, btnTitle, btnIcon, to }) => {
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        navigate(`${to}`)
    }
    return (
        <div className='flex justify-around items-center '>
            <div className='w-[700px] '>
                <p className='text-[40px] text-[#A7A7A7] font-semibold '>{text}</p>
                <p className='text-[40px] text-[#686868] font-bold mt-4'>{secondText}</p>
                <div className='flex justify-end mt-16'>
                    <button onClick={handleSubmit} className='bg-[#0066F3] flex justify-center items-center w-[300px] h-[75px] rounded-[20px] gap-4'>
                        {btnIcon}
                        <span className='text-[34px] text-white font-bold'>{btnTitle}</span>
                    </button>
                </div>
            </div>
            <div>
                <img src={img} className='w-[400px] h-[600px]' />
            </div>
        </div>
    )
}

export default HomeBox2