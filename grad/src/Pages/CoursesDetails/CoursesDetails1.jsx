import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import ScrollToTop from '../../UI/ScrollToTop'
import Loader from '../../UI/Loader'; // Import the Loader component
import axios from 'axios';

const CoursesDetails1 = () => {
    const [data, setData] = useState(null);
    const [term1, setTerm1] = useState(null);
    const [term2, setTerm2] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44377/api/Student/StudentCourses');
                const fetchedData = response.data;
                setData(fetchedData);

                if (fetchedData.level1 && fetchedData.level1.term1) {
                    setTerm1(fetchedData.level1.term1);
                }
                if (fetchedData.level1 && fetchedData.level1.term2) {
                    setTerm2(fetchedData.level1.term2);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader />; // Display Loader while loading
    }

    return (
        <div className="bg-[#b8d0f2] py-6 mt-16 text-right">
            <ScrollToTop />
            <Header title={'مواد الفرقة الدراسية الأولى'} />
            <div className="h-12 border rounded-2xl mt-4 mb-4 bg-white text-[#0060E4] font-bold text-2xl text-center pt-2 w-[200px] inline-block mr-48">
                الترم الاول
            </div>
            <div className="text-right bg-white border rounded-2xl pt-4 text-[#0060E4] font-medium mx-60 pb-8">
                {term1 && term1.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")} {course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}
            </div>
            <div className="h-12 border rounded-2xl mt-4 mb-4 bg-white text-[#0060E4] font-bold text-2xl text-center pt-2 w-[200px] inline-block mr-48">
                الترم الثاني
            </div>
            <div className="text-right bg-white border rounded-2xl pt-4 text-[#0060E4] font-medium mx-60 pb-8">
                {term2 && term2.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoursesDetails1
