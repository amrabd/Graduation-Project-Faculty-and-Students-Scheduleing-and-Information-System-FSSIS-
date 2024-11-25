import React from 'react'

const LabsScheduleHeader = ({ place, first, second, third, fourth, fifth }) => {
    return (
        <>
            <th className='bg-white text-[#0060E4]'>{place}</th>
            <th>{first}</th>
            <th>{second}</th>
            <th>{third}</th>
            <th>{fourth}</th>
            <th>{fifth}</th>
        </>
    )
}

export default LabsScheduleHeader