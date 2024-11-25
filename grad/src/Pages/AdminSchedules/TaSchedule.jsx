import React from 'react'
import TeachingStaffHeader from '../../Components/TeachingStaffHeader/TeachingStaffHeader'
import ScrollToTop from '../../UI/ScrollToTop'
import TABodySchedule from '../../Components/TABodySchedule/TABodySchedule'

const TaSchedule = () => {
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
                            <TABodySchedule day={"Sunday"} />
                            <TABodySchedule day={"Monday"} />
                            <TABodySchedule day={"Tuesday"} />
                            <TABodySchedule day={"Wednesday"} />
                            <TABodySchedule day={"Thursday"} />
                        </tbody>
                    </table >
                </div >
            </div>
        </div>)
}

export default TaSchedule