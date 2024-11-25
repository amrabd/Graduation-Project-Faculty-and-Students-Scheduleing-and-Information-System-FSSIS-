import React from 'react'

const SecondColumnCell = ({ doc, place, subject, year, section, group, dep }) => {
    return (
        <div className={`border-solid border-l-8 border-[#0060E4] bg-[#47976EBF] flex items-center justify-center flex-col text-white text-xl rounded-r-[15px] font-bold  h-[100%]`}>
            <p className='m-1'>{doc}</p>
            <p className='m-1'>{subject}</p>
            <p className='m-1'>{place}</p>
            {year && <p className='m-1'>Year: {year}</p>}
            {section && <p className='m-1'>section: {section}</p>}
            {group && <p className='m-1'>group: {group}</p>}
            <p className='m-1'>{dep}</p>
        </div>
    )
}

export default SecondColumnCell