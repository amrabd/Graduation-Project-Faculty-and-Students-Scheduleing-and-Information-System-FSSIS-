import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../authActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../UI/Loader";

const Login = () => {
    let [overlay, setOverlay] = useState(false)
    function handleOverlay() {
        setOverlay(!overlay);
    }
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [ssn, setSsn] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        dispatch(login(ssn, password, navigate));
        setPassword("")
        setSsn("")
    };
    return (
        <div className="login">
            {loading && <Loader />}
            <div>
                <div className="flex justify-between pt-8 mx-16">
                    <h1 className="flex items-center text-[48px] text-white font-bold gap-2" >
                        <img src="/Images/Login/Polygon 1.png" className="w-[40px] h-[30px]" />
                        FCI AUN
                    </h1>
                    <img src="/Images/Login/material-symbols_info.png" className="cursor-pointer" onClick={handleOverlay} />
                </div>
                <p className="text-[36px] font-medium text-white ml-[115px] mt-4">Welcome to faculty of computer and information! </p>
                <p className="text-[36px] font-semibold text-white ml-[115px] mt-4">Assiut University.</p>
            </div>
            <form className="mt-[12rem] mb-10 w-[456px] mx-auto">
                <div className="relative inline-block mb-6">
                    <input
                        type="text"
                        value={ssn}
                        onChange={(e) => setSsn(e.target.value)}
                        placeholder="Enter your academic mail"
                        className="mx-auto block w-[455px] h-12 pl-12 text-[20px] font-semibold bbb focus:outline-none focus:border-b-[#0166ff] transition-all duration-300 outline-none text-[#0166ff] placeholder:focus:text-[#0166ff]" />
                    <svg width="35px" height="50" className="absolute top-[-2px] left-2 " viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="35px" height="50" fill="white" />
                        <path d="M45.8333 12.5007C45.8333 10.209 43.9583 8.33398 41.6666 8.33398H8.33329C6.04163 8.33398 4.16663 10.209 4.16663 12.5007V37.5007C4.16663 39.7923 6.04163 41.6673 8.33329 41.6673H41.6666C43.9583 41.6673 45.8333 39.7923 45.8333 37.5007V12.5007ZM41.6666 12.5007L25 22.9173L8.33329 12.5007H41.6666ZM41.6666 37.5007H8.33329V16.6673L25 27.084L41.6666 16.6673V37.5007Z" fill="#BBBBBB" />
                    </svg>
                </div>
                <br />
                <div className="relative inline-block ">
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="mx-auto block w-[455px] h-12 pl-12 pr-14 text-[20px] font-semibold bbb focus:outline-none focus:border-b-[#0166ff] transition-all duration-300 outline-none text-[#0166ff] placeholder:focus:text-[#0166ff]" />
                    <svg width="35" height="50" className="absolute bottom-[3px] left-2 " viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 35.4173C23.895 35.4173 22.8352 34.9783 22.0538 34.1969C21.2724 33.4155 20.8334 32.3557 20.8334 31.2507C20.8334 28.9382 22.6875 27.084 25 27.084C26.1051 27.084 27.1649 27.523 27.9463 28.3044C28.7277 29.0858 29.1667 30.1456 29.1667 31.2507C29.1667 32.3557 28.7277 33.4155 27.9463 34.1969C27.1649 34.9783 26.1051 35.4173 25 35.4173ZM37.5 41.6673V20.834H12.5V41.6673H37.5ZM37.5 16.6673C38.6051 16.6673 39.6649 17.1063 40.4463 17.8877C41.2277 18.6691 41.6667 19.7289 41.6667 20.834V41.6673C41.6667 42.7724 41.2277 43.8322 40.4463 44.6136C39.6649 45.395 38.6051 45.834 37.5 45.834H12.5C11.395 45.834 10.3352 45.395 9.55376 44.6136C8.77236 43.8322 8.33337 42.7724 8.33337 41.6673V20.834C8.33337 18.5215 10.1875 16.6673 12.5 16.6673H14.5834V12.5007C14.5834 9.73798 15.6808 7.08846 17.6343 5.13496C19.5878 3.18145 22.2374 2.08398 25 2.08398C26.368 2.08398 27.7225 2.35342 28.9863 2.87691C30.2501 3.40039 31.3985 4.16768 32.3657 5.13496C33.333 6.10223 34.1003 7.25056 34.6238 8.51436C35.1473 9.77817 35.4167 11.1327 35.4167 12.5007V16.6673H37.5ZM25 6.25065C23.3424 6.25065 21.7527 6.90913 20.5806 8.08123C19.4085 9.25334 18.75 10.843 18.75 12.5007V16.6673H31.25V12.5007C31.25 10.843 30.5916 9.25334 29.4195 8.08123C28.2474 6.90913 26.6576 6.25065 25 6.25065Z" fill="#BBBBBB" />
                    </svg>
                    <svg onClick={() => setShowPassword(!showPassword)} width="35" height="40" className="absolute bottom-1 right-2 cursor-pointer" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 15C18.6739 15 17.4021 15.5268 16.4644 16.4645C15.5267 17.4021 15 18.6739 15 20C15 21.3261 15.5267 22.5979 16.4644 23.5355C17.4021 24.4732 18.6739 25 20 25C21.326 25 22.5978 24.4732 23.5355 23.5355C24.4732 22.5979 25 21.3261 25 20C25 18.6739 24.4732 17.4021 23.5355 16.4645C22.5978 15.5268 21.326 15 20 15ZM20 28.3333C17.7898 28.3333 15.6702 27.4554 14.1074 25.8926C12.5446 24.3298 11.6666 22.2101 11.6666 20C11.6666 17.7899 12.5446 15.6702 14.1074 14.1074C15.6702 12.5446 17.7898 11.6667 20 11.6667C22.2101 11.6667 24.3297 12.5446 25.8925 14.1074C27.4553 15.6702 28.3333 17.7899 28.3333 20C28.3333 22.2101 27.4553 24.3298 25.8925 25.8926C24.3297 27.4554 22.2101 28.3333 20 28.3333ZM20 7.5C11.6666 7.5 4.54996 12.6833 1.66663 20C4.54996 27.3167 11.6666 32.5 20 32.5C28.3333 32.5 35.45 27.3167 38.3333 20C35.45 12.6833 28.3333 7.5 20 7.5Z" fill="#BBBBBB" />
                    </svg>
                </div>
                
                <div className="text-center">
                    <button type="submit" onClick={handleLogin} disabled={loading} className="w-[452px] h-[68px] bg-[#0060E4] rounded-[10px] flex justify-center items-center gap-2 pr-2 mt-5 ml-0 pl-0">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 8.33398C27.2102 8.33398 29.3298 9.21196 30.8926 10.7748C32.4554 12.3376 33.3334 14.4572 33.3334 16.6673C33.3334 18.8775 32.4554 20.9971 30.8926 22.5599C29.3298 24.1227 27.2102 25.0007 25 25.0007C22.7899 25.0007 20.6703 24.1227 19.1075 22.5599C17.5447 20.9971 16.6667 18.8775 16.6667 16.6673C16.6667 14.4572 17.5447 12.3376 19.1075 10.7748C20.6703 9.21196 22.7899 8.33398 25 8.33398ZM25 29.1673C34.2084 29.1673 41.6667 32.8965 41.6667 37.5007V41.6673H8.33337V37.5007C8.33337 32.8965 15.7917 29.1673 25 29.1673Z" fill="white" />
                        </svg>
                        <span className="text-[32px] font-semibold text-white">Login</span>
                    </button>
                    {error && <p className="text-red-600 bg-red-200 mt-3 p-3 border-2 border-solid border-red-600 rounded-md">{error}!</p>}
                </div>
            </form>
            {
                overlay &&
                <div className="absolute top-28 right-0 w-[400px] h-[460px] mr-20 bg-white">
                    <div className="relative">
                        <p className="text-center font-semibold text-3xl pt-6 text-[#0166FF]">About Us</p>
                        <svg onClick={handleOverlay} width="50" height="56" className="absolute top-2 right-3 cursor-pointer" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1 10.3595C11.4478 10.0344 11.8609 9.7765 12.3156 9.60053C12.7703 9.42456 13.2577 9.33398 13.75 9.33398C14.2422 9.33398 14.7297 9.42456 15.1844 9.60053C15.6391 9.7765 16.0522 10.0344 16.4 10.3595L30 23.0482L43.6 10.3595C43.948 10.0347 44.3611 9.77705 44.8158 9.60127C45.2705 9.42549 45.7578 9.33502 46.25 9.33502C46.7421 9.33502 47.2295 9.42549 47.6842 9.60127C48.1389 9.77705 48.552 10.0347 48.9 10.3595C49.248 10.6843 49.524 11.0699 49.7124 11.4943C49.9007 11.9187 49.9977 12.3735 49.9977 12.8328C49.9977 13.2922 49.9007 13.747 49.7124 14.1714C49.524 14.5958 49.248 14.9814 48.9 15.3062L35.305 27.9995L48.9 40.6928C49.6028 41.3488 49.9977 42.2385 49.9977 43.1662C49.9977 44.0939 49.6028 44.9835 48.9 45.6395C48.1972 46.2955 47.2439 46.664 46.25 46.664C45.2561 46.664 44.3028 46.2955 43.6 45.6395L30 32.9508L16.4 45.6395C15.6972 46.2955 14.7439 46.664 13.75 46.664C12.7561 46.664 11.8028 46.2955 11.1 45.6395C10.3972 44.9835 10.0023 44.0939 10.0023 43.1662C10.0023 42.2385 10.3972 41.3488 11.1 40.6928L24.695 27.9995L11.1 15.3062C10.7517 14.9815 10.4753 14.596 10.2868 14.1716C10.0983 13.7472 10.0012 13.2923 10.0012 12.8328C10.0012 12.3734 10.0983 11.9185 10.2868 11.4941C10.4753 11.0697 10.7517 10.6841 11.1 10.3595Z" fill="#A2A4A8" />
                        </svg>
                    </div>
                    <p className="font-semibold text-2xl leading-9 tracking-[3%] w-[80%] mx-auto mt-2">We are students at the Faculty of Computers and Information, Assiut University. We created this website to help students and those in charge of teaching work, including doctors, teaching assistants, and all faculty employees, to know their weekly schedule.</p>
                </div>
            }
        </div >
    )
}

export default Login