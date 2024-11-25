import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import ScrollToTop from '../../UI/ScrollToTop'
import Loader from '../../UI/Loader';  // Import the Loader component
import axios from 'axios';

const CoursesDetails4 = () => {
    const [data, setData] = useState(null);
    const [cs, setCs] = useState(null);
    const [is, setIs] = useState(null);
    const [it, setIt] = useState(null);
    const [mm, setMm] = useState(null);
    const [cs2, setCs2] = useState(null);
    const [is2, setIs2] = useState(null);
    const [it2, setIt2] = useState(null);
    const [mm2, setMm2] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44377/api/Student/StudentCourses');
                const fetchedData = response.data;
                setData(fetchedData);

                if (fetchedData.level4 && fetchedData.level4.term1 && fetchedData.level4.term1.cs) {
                    setCs(fetchedData.level4.term1.cs);
                }
                if (fetchedData.level4 && fetchedData.level4.term1 && fetchedData.level4.term1.is) {
                    setIs(fetchedData.level4.term1.is);
                }
                if (fetchedData.level4 && fetchedData.level4.term1 && fetchedData.level4.term1.it) {
                    setIt(fetchedData.level4.term1.it);
                }
                if (fetchedData.level4 && fetchedData.level4.term1 && fetchedData.level4.term1.mm) {
                    setMm(fetchedData.level4.term1.mm);
                }
                if (fetchedData.level4 && fetchedData.level4.term2 && fetchedData.level4.term2.cs) {
                    setCs2(fetchedData.level4.term2.cs);
                }
                if (fetchedData.level4 && fetchedData.level4.term2 && fetchedData.level4.term2.is) {
                    setIs2(fetchedData.level4.term2.is);
                }
                if (fetchedData.level4 && fetchedData.level4.term2 && fetchedData.level4.term2.it) {
                    setIt2(fetchedData.level4.term2.it);
                }
                if (fetchedData.level4 && fetchedData.level4.term2 && fetchedData.level4.term2.mm) {
                    setMm2(fetchedData.level4.term2.mm);
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
            <Header title={'مواد الفرقة الدراسية الرابعة'} />
            <div className="h-12 border rounded-2xl mt-4 mb-4 bg-white text-[#0060E4] font-bold text-2xl text-center pt-2 w-[200px] inline-block mr-48">
                الترم الاول
            </div>
            <div className="text-right bg-white border rounded-2xl pt-4 text-[#0060E4] font-medium mx-60 pb-8">
                <h1 className="text-3xl font-bold mr-5">CS</h1>
                {cs && cs.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}
                <h1 className="text-3xl font-bold mr-5 my-3">IS</h1>
                {is && is.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}

                <h1 className="text-3xl font-bold mr-5 my-3">IT</h1>
                {it && it.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}

                <h1 className="text-3xl font-bold mr-5 my-3">MM</h1>
                {mm && mm.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}
            </div>
            <div className="h-12 border rounded-2xl mt-4 mb-4 bg-white text-[#0060E4] font-bold text-2xl text-center pt-2 w-[200px] inline-block mr-48">
                الترم الثاني
            </div>
            <div className="text-right bg-white border rounded-2xl pt-4 text-[#0060E4] font-medium mx-60 pb-8">
                <h1 className="text-3xl font-bold mr-5">CS</h1>
                {cs2 && cs2.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}
                <h1 className="text-3xl font-bold mr-5 my-3">IS</h1>
                {is2 && is2.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}

                <h1 className="text-3xl font-bold mr-5 my-3">IT</h1>
                {it2 && it2.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}

                <h1 className="text-3xl font-bold mr-5 my-3">MM</h1>
                {mm2 && mm2.map((course, index) => (
                    <div key={index}>
                        <h3 className='text-3xl mr-5'>{course.courseName}<span className='text-4xl ml-2'>-</span></h3>
                        <p className='text-2xl mr-5'>{course.prerequesetcourse.join(" + ")}{course.prerequesetcourse.length === 0 ? "لا تعتمد على شئ" : " تعتمد على" }</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoursesDetails4
