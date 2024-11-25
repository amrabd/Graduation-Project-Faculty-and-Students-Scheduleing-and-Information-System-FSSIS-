import React from 'react'

const MaterialBox2 = ({ text ,url}) => {
    return (
        <div class={`text-center border text-white ${!url ? 'bg-gray-600' : 'bg-[#0060E4]'} text-xl font-bold rounded-2xl  col-start-3 col-end-4 h-[65px] pt-4
            max-[430px]:ml-4 max-[430px]:w-96 max-[430px]:col-start-1 max-[430px]:col-end-2 
            sm:ml-32 sm:w-96 sm:col-start-1 
            md:ml-60 md:w-96
            min-[992px]:ml-[120px] min-[992px]:w-96 min-[992px]:col-start-1 min-[992px]:col-start-2
            lg:w-96
            xl:w-[461px] xl:mr-[200px]`}>
         <a href={url} target='_blank' className={`text-xl font-bold ${!url ? 'cursor-not-allowed' : 'cursor-pointer'}` }>{text}</a>
        </div>
        )
}

export default MaterialBox2