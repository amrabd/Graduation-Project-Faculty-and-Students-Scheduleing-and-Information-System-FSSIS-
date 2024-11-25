import React from 'react'
import TeachingStaffHeader from '../../Components/TeachingStaffHeader/TeachingStaffHeader'
import TeachingStaffBodySchedule from '../../Components/ProfsBodySchedule/ProfsBodySchedule'
import ScrollToTop from '../../UI/ScrollToTop'

const ProfSchedule = () => {
    return (
        <div className='bg-[#0060E42B] w-max mt-16'>
            <ScrollToTop />
            <div>
                <div>
                    <table className='w-max'>
                        <thead className='sticky z-50 top-[68px]'>
                            <tr>
                                <TeachingStaffHeader />
                            </tr>
                        </thead>
                        <tbody>
                            <TeachingStaffBodySchedule day={"Sunday"} />
                            <TeachingStaffBodySchedule day={"Monday"} />
                            <TeachingStaffBodySchedule day={"Tuesday"} />
                            <TeachingStaffBodySchedule day={"Wednesday"} />
                            <TeachingStaffBodySchedule day={"Thursday"} />
                        </tbody>
                    </table >
                </div >
            </div>
        </div>)
}

export default ProfSchedule