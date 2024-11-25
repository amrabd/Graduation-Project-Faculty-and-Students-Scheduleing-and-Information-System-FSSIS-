import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ITNavBar = () => {
    const [active, setActive] = useState("")
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === "/ithome") {
            setActive("ithome");
        } else if (path.includes("/itHome/itlabs")) {
            setActive("itlabs");
        } else if (path.includes("/itHome/ithalls")) {
            setActive("ithalls");
        } else if (path === "/home/aboutus") {
            setActive("aboutus");
        }
        else if (path.includes("/ithome/itLabs")) {
            setActive("itlabs");
        } else if (path.includes("/ithome/itHalls")) {
            setActive("ithalls");
        }
        else if (path.includes("/contactus")) {
            setActive("contactus");
        }
        else {
            setActive("");
        }
    }, [location]);
    
    return (
        <nav className='fixed top-0 z-50'>
            <div className="w-screen mx-auto flex justify-between items-center bg-[#ffff] pb-3">
                <div className="flex items-center  ml-[30px] ">
                    <img src="/Images/Navbar/Polygon 1.png" alt="Logo" className="mr-2 h-9 pt-2" />
                    <span className="text-[#0060E4] font-bold text-[35px] font-moichiy">FCI AUN</span>
                </div >
                <ul className="flex space-x-8 items-center pt-4  justify-around ml-[8px] font-bold mr-5 ">
                    <Link to={"/ithome"}> <li onClick={() => setActive("ithome")} className={`${active == "ithome" ? "focus " : null} text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[150px] h-[40px] rounded-lg`} >Home</li></Link>
                    <Link to={"/itHome/itlabs"}> <li onClick={() => setActive("itlabs")} className={`${active == "itlabs" ? "focus " : null} text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg`}>Laboratories</li ></Link>
                    <Link to={"/itHome/ithalls"}> <li onClick={() => setActive("ithalls")} className={`${active == "ithalls" ? "focus " : null} text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[150px] h-[40px] rounded-lg`}>Halls</li ></Link>
                    <Link to={"/home/aboutus"}> <li  onClick={() => setActive("aboutus")} className={`${active == "aboutus" ? "focus " : null} text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg`}>About us </li></Link>
                    <Link to={"/contactus"}><li onClick={() => setActive("contactus")} className={`${active == "contactus" ? "focus" : null} text-[#0060E4] ml-[20px] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[160px] h-[40px] rounded-lg`}>Contact us</li></Link>
                </ul>
            </div >
        </nav >
    )
} 

export default ITNavBar