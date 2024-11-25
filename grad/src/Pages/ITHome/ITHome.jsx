import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollToTop from '../../UI/ScrollToTop'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../authActions'

const ITHome = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handlelogout(e) {
        e.preventDefault()
        dispatch(logoutUser(navigate))
    }
    return (
        <div className='relative h-screen mt-16 overflow-hidden'>
            <ScrollToTop />
            <img src="/Images/ITHome/undraw_Dev_productivity_re_fylf 1.png" className='absolute' />
            <div className="bg-hero-pattern bg-cover bg-no-repeat h-screen w-[1500px] mb-10">
                <img src="images/ITHome/Frame logout.png" onClick={handlelogout} className="cursor-pointer w-[268px] h-[78px] absolute top-9 left-[35px]" />
                <Link to={"itLabs"}>
                    <div className="w-[530px] h-[109px] absolute top-[225px] left-[850px] bg-[#0059D5] border
        rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-7 border-[#0059D5]">
                        مبني المعامل
                    </div>
                </Link>
                <Link to={"itHalls"}>
                    <div className="w-[530px] h-[109px] absolute top-[550px] left-[850px] bg-[#0059D5] border
        rounded-3xl text-white text-center font-['Poppins'] text-5xl font-bold p-7 border-[#0059D5]">
                        مبني المدرجات
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ITHome