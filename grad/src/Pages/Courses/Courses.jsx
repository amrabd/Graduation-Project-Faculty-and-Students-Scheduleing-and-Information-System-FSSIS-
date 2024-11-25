import React from 'react'
import Header from '../../Components/Header/Header'
import { useNavigate } from 'react-router-dom'
import ScrollToTop from '../../UI/ScrollToTop'

const Courses = () => {
    const navigate = useNavigate()
    function handleSubmit1(e) {
        e.preventDefault()
        navigate(`coursesDetails1`)
    }
    function handleSubmit2(e) {
        e.preventDefault()
        navigate(`coursesDetails2`)
    }
    function handleSubmit3(e) {
        e.preventDefault()
        navigate(`coursesDetails3`)
    }
    function handleSubmit4(e) {
        e.preventDefault()
        navigate(`coursesDetails4`)
    }
    return (
        <div className="bg-[#0060E430] h-screen mt-16 overflow-hidden">
            <ScrollToTop />
            <Header title={'Courses'} />
            <div className='flex justify-center items-center gap-8 gap-y-8'>
                <div>
                    <div className='relative w-[500px] h-[36vh] mb-20' onClick={handleSubmit1} >
                        <img src='/Images/Courses/blob-haikei_1-removebg-preview-removebg-preview.png'  className='absolute w-[450px] top-[-70px] left-8' />
                        <div className='flex justify-center items-center flex-col cursor-pointer gap-4 relative '>
                            <img src='/Images/Courses/🦆 icon _badge_.png' className='w-10' />
                            <span className='text-2xl text-white font-bold'>First year</span>
                        </div>
                    </div>
                    <div className='relative w-[450px] h-[36vh]' onClick={handleSubmit3}>
                        <img src='/Images/Courses/blob-haikei__4__1-removebg-preview.png' className='absolute w-[220px] top-[-60px] left-[110px]' />
                        <div className='flex justify-center items-center flex-col cursor-pointer gap-4 relative mt-10'>
                            <img src='/Images/Courses/🦆 icon _bug_.png' className='w-12' />
                            <span className='text-2xl text-white font-bold'>Third year</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='relative w-[450px] h-[36vh] mb-20'  onClick={handleSubmit2}>
                        <img src='/Images/Courses/blob-haikei__6__1__1_-removebg-preview.png' className='absolute w-[220px] top-[-50px] left-[110px]' />
                        <div className='flex justify-center items-center flex-col gap-4 cursor-pointer relative mt-10'>
                            <img src='/Images/Courses/🦆 icon _graph_.png' className='w-12' />
                            <span className='text-2xl text-white font-bold'>Second year</span>
                        </div>
                    </div>
                    < div className='relative w-[450px] h-[36vh]' onClick={handleSubmit4}>
                        <img src='/Images/Courses/blob-haikei__5__1-removebg-preview.png'  className='absolute w-[230px] top-[-60px] left-[110px]' />
                        <div className='flex justify-center items-center flex-col cursor-pointer gap-4 relative mt-10'>
                            <img src='/Images/Courses/Vector.png' className='w-12' />
                            <span className='text-2xl text-white font-bold'>Fourth year</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Courses