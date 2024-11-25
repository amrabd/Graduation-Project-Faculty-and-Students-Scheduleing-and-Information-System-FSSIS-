import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import TaProfBox from '../../Components/TaProfBox/TaProfBox'
import ScrollToTop from '../../UI/ScrollToTop'
import Loader from '../../UI/Loader'; // Import the Loader component
import axios from 'axios'

const ProfDetails = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44377/api/TeachingStaff/ViewProfessor');
                setData(response.data);
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
        <div className='bg-[#C5D1F2] mt-16 h-full'>
            <ScrollToTop />
            <Header title={"Professors"} />
            <div className='grid grid-cols-3 gap-y-14 place-items-center mt-8 pb-8'>
                {data &&
                    data.map(e => (
                        <TaProfBox
                            key={e.ssn}
                            name={e.fullName}
                            dep={`${e.deptName} Department`}
                            img={e.picture}
                            info={e.discription}
                            fb={e.facebookLink}
                            li={e.linkedInLink}
                            gm={e.acadimicMailLink}
                            gh={e.githubLink}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ProfDetails
