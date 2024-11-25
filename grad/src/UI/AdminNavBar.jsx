import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const AdminNavBar = () => {
    const [otherLinks, setOtherLinks] = useState(false)
    const [active, setActive] = useState("")
    const [active2, setActive2] = useState("")
    function handleClick(e) {
        e.preventDefault()
        e.stopPropagation()
        setOtherLinks(!otherLinks)
    }
    function prevent(e) {
        e.stopPropagation()
    }
    const navigate = useNavigate()

    function handleSubmit(e) {
        navigate(`/home/schedule`)
        navigate(0);
    }
    useEffect(() => {
        const handleClickOutside = (e) => {
            setOtherLinks(false);
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === "/home") {
            setActive("home");
            setActive2("");
        } else if (path === "/contactus") {
            setActive("contactus");
            setActive2("");
        } 
        else if (path === "/home/aboutus") {
            setActive("aboutus");
            setActive2("");
        }
        else if (path.includes("/labsSchedule")) {
            setActive("otherlinks");
            setActive2("labs");
        }
        else if (path.includes("/hallsSchedule")) {
            setActive("otherlinks");
            setActive2("halls");
        }
        else if (path.includes("/ProfSchedule")) {
            setActive("otherlinks");
            setActive2("prof");
        }
        else if (path.includes("/TaSchedule")) {
            setActive("otherlinks");
            setActive2("ta");
        }
        else if (path.includes("/home/professor")) {
            setActive("otherlinks");
            setActive2("profdetails");
        }
        else if (path.includes("/home/ta")) {
            setActive("otherlinks");
            setActive2("tadetails");
        }
        else if (path.includes("/home/courses")) {
            setActive("otherlinks");
            setActive2("courses");
        }
        else if (path.includes("/home/material")) {
            setActive("otherlinks");
            setActive2("material");
        }
        else if (path.includes("/home/schedule")) {
            setActive("otherlinks");
            setActive2("schedule");
        }
         else {
            setActive("");
        }
    }, [location]);
    return (
        <>
            <nav className='fixed top-0 z-[999]'>
                <div className="w-screen mx-auto flex justify-between items-center bg-[#ffff] pb-3">
                    <div className="flex items-center  ml-[30px] ">
                        <img src="/Images/Navbar/Polygon 1.png" alt="Logo" className="mr-2 h-9 pt-2" />
                        <span className="text-[#0060E4] font-bold text-[35px] font-moichiy">FCI AUN</span>
                    </div >
                    <ul className="flex space-x-10 items-center pt-4  justify-around ml-[40px]  pr-[100px] font-bold ">
                        <Link to={'/home'}> <li onClick={() => {setActive("home"); setOtherLinks(false);}} className={`text-[#0060E4] ml-[20px] text-[25px] ${active == "home" ? "focus" : null} text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg`} > Home</li></Link>
                        <li onClick={handleClick} className={` ${active == "otherlinks" ? "focus" : null} text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px]   rounded-lg`}>Other Links</li >
                        <Link to={'/home/aboutus'}> <li onClick={() => {setActive("aboutus") ; setOtherLinks(false);}} className={`${active == "aboutus" ? "focus" : null} text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg `}>About us </li></Link>
                        <Link to={'/contactus'}> <li onClick={() => { setActive("contactus"); setOtherLinks(false); }} className={` ${active == "contactus" ? "focus" : null} text-[#0060E4] text-[25px] text-center hover:text-[#ffff] transition-all delay-75 hover:bg-[#0060E4] cursor-pointer w-[180px] h-[40px] rounded-lg`}>Contact us</li></Link>
                    </ul>
                    <div onClick={prevent} className={` w-[870px] ${otherLinks ? 'h-max' : 'h-0'} transition-all delay-75 z-50 rounded-b-xl bg-[#DAE4F4] absolute top-[68px] mx-auto inset-0 flex justify-start bg-[#DAE4F4FC]`}>
                        {otherLinks && (
                            <>
                                <div>
                                    <img src="/Images/Navbar/wallpaper.png" alt="logo" className="mt-[30%] w-[398px] h-[350px]" />
                                </div>
                                <ul className="pt-[25px] ml-[80px]">
                                    <Link to={"/labsSchedule"}>
                                        <div className={`${active2 == "labs" ? "focus2" : null} flex mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("labs")}} className={`${active2 == "labs" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold`}>Laboratories schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={"/hallsSchedule"}>
                                        <div className={`${active2 == "halls" ? "focus2" : null} flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("halls");}} className={`${active2 == "halls" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold`}>Halls schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={"/ProfSchedule"}>
                                        <div className={`${active2 == "prof" ? "focus2" : null} flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("prof")}} className={`${active2 == "prof" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold`}>Professors schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={"/TaSchedule"}>
                                        <div className={`${active2 == "ta" ? "focus2" : null} flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("ta")}} className={`${active2 == "ta" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold pr-2`}>Teaching Assistant schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={"/home/schedule"}>
                                        <div className={`${active2 == "schedule" ? "focus2" : null} flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                            <img src="/Images/Navbar/4 schedule.png" alt="logo" className=" h-[45px]" />
                                            <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("schedule"); handleSubmit()}} className={`${active2 == "schedule" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold pr-2`}>Schedule</li>
                                        </div>
                                    </Link>
                                    <Link to={'/home/professor'}>   <div className={`${active2 == "profdetails" ? "focus2" : null} flex mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                        <img src="/Images/Navbar/1.png" alt="logo" className=" h-[45px]" />
                                        <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("profdetails")}} className={`${active2 == "profdetails" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold`}>Prosessor</li>
                                    </div>
                                    </Link>
                                    <Link to={'/home/ta'}>  <div className={`${active2 == "tadetails" ? "focus2" : null} flex mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                        <img src="/Images/Navbar/2.png" alt="logo" className=" h-[45px]" />
                                        <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("tadetails")}} className={`${active2 == "tadetails" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F] text-[22px] font-bold`}>Teaching Assistnt </li>
                                    </div>
                                    </Link>
                                    <Link to={'/home/courses'}><div className={`${active2 == "courses" ? "focus2" : null} flex mb-[15px] hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                        <img src="/Images/Navbar/3 book.png" alt="logo" className=" h-[45px]" />
                                        <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("courses")}} className={`${active2 == "courses" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold`}>Courses</li>
                                    </div>
                                    </Link>
                                    <Link to={"/home/material"}>
                                        <div className={`${active2 == "material" ? "focus2" : null} flex mb-[15px]  hover:-translate-y-1 transition-all delay-75 cursor-pointer`}>
                                            <img src="/Images/Navbar/5.png" alt="logo" className=" h-[45px]" />
                                            <li onClick={() => {setActive("otherlinks"); setOtherLinks(false); setActive2("material")}} className={`${active2 == "material" ? "text-white" : null} text-center mt-[5px] ml-[5px] text-[#00439F]  text-[22px] font-bold`}>Materials</li>
                                        </div>
                                    </Link>
                                </ul>
                            </>)
                        }
                    </div>
                </div >
            </nav >
        </>)
}

export default AdminNavBar