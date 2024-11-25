import React from 'react'
import LabsScheduleHeader from '../../Components/LabsScheduleHeader/LabsScheduleHeader'
import ScrollToTop from '../../UI/ScrollToTop'
import LabsBodySchedule from '../../Components/LabsBodySchedule/LabsBodySchedule'

const LabsSchedule = () => {
    return (
        <div className='bg-[#0060E42B] w-max mt-16'>
            <ScrollToTop />
            <div>
                <div>
                    <table className='w-max'>
                        <thead className='sticky z-50 top-[68px]'>
                            <tr>
                                <LabsScheduleHeader
                                    place={"الدور الأرضي"}
                                    first={"0أ"}
                                    second={"0ب"}
                                    third={"0ج"}
                                    fourth={"0د"}
                                    fifth={"0هـ"}
                                />
                                <LabsScheduleHeader
                                    place={"الدور الأول"}
                                    first={"1أ"}
                                    second={"1ب"}
                                    third={"1ج"}
                                    fourth={"1د"}
                                    fifth={"1هـ"}
                                />
                                <LabsScheduleHeader
                                    place={"الدور الثاني"}
                                    first={"2أ"}
                                    second={"2ب"}
                                    third={"2ج"}
                                    fourth={"2د"}
                                    fifth={"2هـ"}
                                />
                                <LabsScheduleHeader
                                    place={"الدور الثالث"}
                                    first={"3أ"}
                                    second={"3ب"}
                                    third={"3ج"}
                                    fourth={"3د"}
                                    fifth={"3هـ"}
                                />
                                <LabsScheduleHeader
                                    place={"الدور الرابع"}
                                    first={"4أ"}
                                    second={"4ب"}
                                    third={"4ج"}
                                    fourth={"4د"}
                                    fifth={"4هـ"}
                                />
                            </tr>
                        </thead>
                        <tbody>
                            <LabsBodySchedule day={'Sunday'} />
                            <LabsBodySchedule day={'Monday'} />
                            <LabsBodySchedule day={'Tuesday'} />
                            <LabsBodySchedule day={'Wednesday'} />
                            <LabsBodySchedule day={'Thursday'} />
                        </tbody>
                    </table >
                </div >
            </div>
        </div>
    )
}

export default LabsSchedule