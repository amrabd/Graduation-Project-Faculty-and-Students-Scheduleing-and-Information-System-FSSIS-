import React from 'react'

const AboutUsCard = ({pic, name, job, gh,li,gm,fb}) => {
  return (
    <div className='text-center justify-center items-center mt-10 hover:mt-10 transition-all duration-300'>
        <div ><img src={pic} className='w-80 h-72 hover:rounded-md transition-all duration-300 rounded-full mx-auto'/></div>
        <div className='bg-white text-[#0060e4] mt-2 rounded-lg px-8'>
            <div>
                <p className='text-2xl font-semibold pt-3'>{name}</p>
                <p className='text-base font-semibold'>{job}</p>
            </div>
            <div class="flex justify-center items-center gap-10 my-4 pb-2">
                <a href={gh} target='_blank' className='text-3xl cursor-pointer text-[#0060E4]'><i class='bx bxl-github'></i></a>
                <a href={li} target='_blank' className='text-3xl cursor-pointer text-[#0060E4]'><i class='bx bxl-linkedin-square'></i></a>
                <a href={gm} target='_blank' className='text-3xl cursor-pointer text-[#0060E4]'><i class='bx bx-envelope'></i></a>
                <a href={fb} target='_blank' className='text-3xl cursor-pointer text-[#0060E4]'><i class='bx bxl-facebook-circle'></i></a>
            </div>
        </div>
    </div>
  )
}

export default AboutUsCard