import React from 'react'

const TaProfBox = ({ name, dep, info, img, gh, li, gm, fb }) => {
    return (
        <div className='relative bg-white w-[24rem] h-max rounded-[12px] '>
            <img src={img ===  null ? "/Images/TaProfDetails/7_1-removebg-preview.png" : img } className='absolute top-[-45px] bg-[#C5D1F2] w-24 h-24 rounded-full p-1 right-[-5px]' />
            <div className='ml-5 pt-5'>
                <p className='font-bold text-2xl w-[75%]'>{name}</p>
                <p className='text-gray-500'>{dep}</p>
            </div>
            <div className='ml-5 mt-3 h-28 overflow-y-scroll'>
                <p className='text-gray-700 text-lg w-[22rem]'>{info}</p>
            </div>
            <div class="flex justify-center items-center gap-10 my-4 ">
                <a href={gh} target='_blank' className='text-3xl text-[#0060E4]'><i class='bx bxl-github'></i></a>
                <a href={li} target='_blank' className='text-3xl text-[#0060E4]'><i class='bx bxl-linkedin-square'></i></a>
                <a href={gm} target='_blank' className='text-3xl text-[#0060E4]'><i class='bx bx-envelope'></i></a>
                <a href={fb} target='_blank' className='text-3xl text-[#0060E4]'><i class='bx bxl-facebook-circle'></i></a>
            </div>
        </div>
    )
}

export default TaProfBox