import './home.css'
import Title from "../../Components/Title/Title";
import HomeBox from "../../Components/HomeBox/HomeBox";
import HomeBox2 from "../../Components/HomeBox2/HomeBox2";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../UI/ScrollToTop";
import { Fade } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../authActions';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutUser(navigate));
    };
    const username = useSelector((state) => state.auth.user.userName)
    return (
        <>
            <div className='home mx-[111px]'>
                <ScrollToTop />
                <img src="/Images/Home/wave.png" className='absolute right-0 top-16 h-[450px] w-[100%] -z-10' />
                <img src="/Images/Home/logout.png" onClick={handleLogout} className="absolute right-6 top-[5rem] cursor-pointer " />
                <div className='text-white mt-28 mb-28'>
                    <Fade cascade>
                        <div>
                            <p className='font-bold text-[44px] mt-8 '>Welcome {username} to</p>
                            <p className='font-medium text-5xl ml-[89px] mt-8'>Faculty of Computer and Information</p>
                            <p className='font-medium text-5xl ml-[89px] mt-12'>Assiut University</p>
                        </div>
                    </Fade>
                </div>
                <Title title={'Professors'} />
                <HomeBox
                    img={'/Images/Home/prof.png'}
                    text={"In our university we have one of the best teaching stuff. Our professors exhibit exceptional expertise in their respective fields. "}
                    secondText={"C'mon let's take a look at them!"}
                    btnIcon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0312 0C12.2846 0 10.0375 2.24719 10.0375 4.99376V9.98752H0.499376C0.19975 9.98752 0.0499376 10.1873 0.0499376 10.437V22.4719C0.0499376 23.8702 1.14856 24.9688 2.54682 24.9688H37.5031C38.9014 24.9688 40 23.8702 40 22.4719V10.437C40 10.1373 39.8003 9.98752 39.5506 9.98752H30.0125V4.99376C30.0125 2.24719 27.7653 0 25.0187 0L15.0312 0ZM15.0312 4.99376H25.0187V9.98752H15.0312V4.99376ZM0.0499376 29.5131V39.5006C0.0499376 39.7503 0.249688 39.9501 0.499376 39.9501H39.5006C39.7503 39.9501 39.9501 39.7503 39.9501 39.5006V29.5131C39.1511 29.8127 38.3521 29.9625 37.4532 29.9625H2.49688C1.598 29.9625 0.799001 29.7628 0 29.5131H0.0499376Z" fill="#FFF9F9" />
                    </svg>
                    }
                    btnTitle={"Professors"}
                    to={"professor"} />
                <Title title={"TA's"} />
                <HomeBox2
                    img={'/Images/Home/TA.png'}
                    text={"Teaching assistants play a crucial role in supporting students' academic journeys. Their dedication enhances the overall educational experience."}
                    secondText={"Why not take a look at them?"}
                    btnIcon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 0C14.5 0 10 5.6 10 12.5C10 19.4 14.5 25 20 25C25.5 25 30 19.4 30 12.5C30 5.6 25.5 0 20 0ZM9.55 25C4.25 25.25 0 29.6 0 35V40H40V35C40 29.6 35.8 25.25 30.45 25C27.75 28.05 24.05 30 20 30C15.95 30 12.25 28.05 9.55 25Z" fill="white" />
                    </svg>
                    }
                    btnTitle={"TA's"}
                    to={"ta"} />
                <Title title={'Schedule'} />
                <HomeBox
                    img={'/Images/Home/SChedule.png'}
                    text={"Maintaining a clear and accessible university schedule is vital for students, providing a structured schedule for their academic subjects. It ensures students can plan efficiently and manage their time effectively."}
                    secondText={"Let's take a look at your schedule!"}
                    btnIcon={<svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0570613 0V11.4123H40V0H0.0570613ZM0.0570613 17.1184V45.1355C0.0570613 45.4208 0.285307 45.6491 0.570613 45.6491H39.4294C39.7147 45.6491 39.9429 45.4208 39.9429 45.1355V17.1184H0H0.0570613ZM5.7632 22.8245H11.4693V28.5307H5.7632V22.8245ZM17.1755 22.8245H22.8816V28.5307H17.1755V22.8245ZM28.5877 22.8245H34.2939V28.5307H28.5877V22.8245ZM5.7632 34.2368H11.4693V39.9429H5.7632V34.2368ZM17.1755 34.2368H22.8816V39.9429H17.1755V34.2368Z" fill="white" />
                    </svg>
                    }
                    btnTitle={"Schedule"}
                    to={"schedule"} />
                <Title title={"Courses"} />
                <HomeBox2
                    img={'/Images/Home/courses.png'}
                    text={"Providing comprehensive information about university course names and details is essential for students to make informed decisions about their academic paths. "}
                    secondText={"We can learn more about them here!?"}
                    btnIcon={<svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.03 37.5003H52.5V8.33366C52.5 7.22859 51.9732 6.16878 51.0355 5.38738C50.0979 4.60598 48.8261 4.16699 47.5 4.16699H15C11.985 4.16699 7.5 5.83158 7.5 10.417V39.5837C7.5 44.1691 11.985 45.8337 15 45.8337H52.5V41.667H15.03C13.875 41.642 12.5 41.2607 12.5 39.5837C12.5 37.9066 13.875 37.5253 15.03 37.5003ZM20 12.5003H42.5V16.667H20V12.5003Z" fill="white" />
                    </svg>
                    }
                    btnTitle={"Courses"}
                    to={"courses"} />
                <Title title={'Material'} />
                <HomeBox
                    img={'/Images/Home/material.png'}
                    text={"Ensuring accessibility to course materials is crucial so we offer clear and organized , course materials, including textbooks, lecture notes, and online resources."}
                    secondText={"You can always check them out here!"}
                    btnIcon={<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V10H40V5H15V0H0ZM0 15V37.5C0 38.9 1.1 40 2.5 40H37.5C38.9 40 40 38.9 40 37.5V15H0Z" fill="#FFFDFD" />
                    </svg>
                    }
                    btnTitle={"Material"}
                    to={"material"} />
                <Title title={"About us"} />
                <Fade>
                    <HomeBox2
                        img={'/Images/Home/aboutUs.png'}
                        text={"We are students at Faculty of Computers and Information, Assiut University.We created this website to make everything easier for the students, all teaching staff and all faculty employees"}
                        secondText={"Come Read more about us here!"}
                        btnIcon={<svg width="57" height="47" viewBox="0 0 57 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.2656 14.0469C23.2656 13.367 23.5112 12.7024 23.9714 12.1371C24.4315 11.5718 25.0855 11.1312 25.8507 10.871C26.6158 10.6109 27.4578 10.5428 28.2701 10.6754C29.0824 10.8081 29.8285 11.1355 30.4141 11.6162C30.9998 12.0969 31.3986 12.7094 31.5602 13.3763C31.7218 14.0431 31.6388 14.7342 31.3219 15.3623C31.0049 15.9905 30.4682 16.5273 29.7796 16.9051C29.091 17.2828 28.2813 17.4844 27.4531 17.4844C26.3425 17.4844 25.2774 17.1222 24.4921 16.4776C23.7068 15.8329 23.2656 14.9586 23.2656 14.0469ZM56.7656 23.5C56.7656 28.0891 55.1079 32.5752 52.002 36.391C48.8962 40.2067 44.4817 43.1807 39.3168 44.9369C34.1519 46.6931 28.4687 47.1526 22.9857 46.2573C17.5027 45.362 12.4662 43.1521 8.5132 39.9071C4.56018 36.6621 1.86814 32.5277 0.777504 28.0267C-0.313132 23.5257 0.246622 18.8604 2.38598 14.6205C4.52534 10.3807 8.14821 6.7569 12.7965 4.20731C17.4447 1.65771 22.9096 0.296875 28.5 0.296875C35.994 0.303699 43.1786 2.7505 48.4776 7.10045C53.7767 11.4504 56.7573 17.3482 56.7656 23.5ZM50.4844 23.5C50.4844 19.9307 49.195 16.4415 46.7794 13.4737C44.3637 10.5059 40.9302 8.19279 36.9131 6.82686C32.8959 5.46094 28.4756 5.10355 24.2111 5.79989C19.9465 6.49623 16.0293 8.21503 12.9547 10.7389C9.88014 13.2628 7.78633 16.4785 6.93806 19.9792C6.08979 23.48 6.52515 27.1086 8.1891 30.4062C9.85304 33.7039 12.6708 36.5224 16.2861 38.5054C19.9015 40.4884 24.1519 41.5469 28.5 41.5469C34.3287 41.5418 39.9169 39.6387 44.0384 36.2554C48.1599 32.8721 50.4782 28.2848 50.4844 23.5ZM31.6406 31.3805V24.3594C31.6406 23.2198 31.0892 22.1268 30.1075 21.321C29.1259 20.5152 27.7945 20.0625 26.4063 20.0625C25.6646 20.0616 24.9464 20.2762 24.379 20.6683C23.8116 21.0604 23.4316 21.6047 23.3062 22.2048C23.1808 22.8049 23.3181 23.422 23.6939 23.9469C24.0697 24.4718 24.6597 24.8706 25.3594 25.0727V32.0937C25.3594 33.2333 25.9109 34.3263 26.8925 35.1321C27.8741 35.9379 29.2055 36.3906 30.5938 36.3906C31.3354 36.3915 32.0536 36.1769 32.621 35.7848C33.1884 35.3927 33.5685 34.8484 33.6939 34.2484C33.8192 33.6483 33.6819 33.0311 33.3061 32.5062C32.9303 31.9813 32.3403 31.5825 31.6406 31.3805Z" fill="white" />
                        </svg>
                        }
                        btnTitle={"About us"}
                        to={"aboutus"}
                         />
                </Fade>

                <div className="relative mx-[-111px] px-12 mt-56 flex justify-around items-center">
                    <img src="/Images/Home/footer.png" className="absolute bottom-0 right-0 w-[1600px] h-[1000px] -z-10" />
                    <div className="w-[530px]">
                        <div>
                            <h1 className="flex items-center text-[48px] text-white font-bold gap-2" >
                                <img src="/Images/Login/Polygon 1.png" className="w-[50px] h-[40px]" />
                                FCI AUN
                            </h1></div>
                        <div className="mt-8">
                            <p className="text-3xl w-[28rem] text-[#DEDEDE] font-normal leading-[45px]">We offer a big range of services
                                for all students and teaching staff
                                so it can meet all their needs
                            </p>
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center gap-2">
                                <img src="/Images/Home/mingcute_phone-line.png" />
                                <p className="text-2xl font-semibold text-white">+20 1208492527</p>
                            </div>
                            <div className="flex items-center gap-2 mt-3 mb-8">
                                <img src="/Images/Home/ic_outline-email.png" />
                                <p className="text-2xl font-semibold text-white">aamr93095@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div><img src="/Images/Home/footerImg.png" className="w-[500px]" /></div>
                </div>
            </div>
        </>
    )
}

export default Home