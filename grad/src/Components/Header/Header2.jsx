import React from 'react'

const Header2 = ({ title }) => {
    return (
        <div class="text-center border text-[#0060E4] font-['Poppins']  h-12 pt-2 text-2xl font-bold rounded-2xl bg-white
            max-[430px]:ml-4 max-[430px]:w-96 max-[430px]:col-span-2
            sm:ml-32 sm:w-96 sm:col-span-2
            md:ml-60 md:w-96
            min-[992px]:ml-[350px] min-[992px]:w-96 min-[990px]:col-start-1 col-end-3
            lg:ml-[500px] lg:w-96
            xl:w-[345px] xl:ml-[625px]">
            {title}
        </div>)
}

export default Header2