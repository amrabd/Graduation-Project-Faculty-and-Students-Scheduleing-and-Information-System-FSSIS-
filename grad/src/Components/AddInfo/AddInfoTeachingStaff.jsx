import React from 'react'

const AddInfoTeachingStaff = ({ cancel }) => {
    return (
        <form className='bg-gray-300 w-full h-full rounded-r-lg border-l-8 border-solid flex-col border-blue-800 flex justify-center items-center opacity-100 transition-all delay-100 hover:opacity-100'>
            <div className='flex flex-col'>
                <div className='flex gap-2 mx-2 mb-2'>
                    <select className='w-28 bg-[#0060e4] text-white pl-2 rounded-md'>
                        <optgroup>
                            <option value="" selected disabled hidden>Course</option>
                            <option>adsssssssssssssssssa</option>
                            <option>adsa</option>
                        </optgroup>
                    </select>
                    <select className='w-28 bg-[#0060e4] text-white pl-2 rounded-md'>
                        <optgroup>
                            <option value="" selected disabled hidden>Duaration</option>
                            <option>adsa</option>
                            <option>adsa</option>
                        </optgroup>
                    </select>
                </div>
                <div className='flex gap-2 mx-2'>
                    <select className='w-28 bg-[#0060e4] text-white pl-2 rounded-md'>
                        <optgroup>
                            <option value="" selected disabled hidden>Year</option>
                            <option>adsa</option>
                            <option>adsa</option>
                        </optgroup>
                    </select>
                    <select className='w-28 bg-[#0060e4] text-white pl-2 rounded-md'>
                        <optgroup>
                            <option value="" selected disabled hidden>Department</option>
                            <option>adsa</option>
                            <option>adsa</option>
                        </optgroup>
                    </select>
                </div>
                <div className='mb-[-10px] mt-1'>
                    <select className='w-28 bg-[#0060e4] text-white pl-2 rounded-md'>
                        <optgroup>
                            <option value="" selected disabled hidden>Hall / Lab</option>
                            <option>adsa</option>
                            <option>adsa</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className='bg-red-700 ml-5  mt-3 py-0 px-3' onClick={cancel}>Cancel</button>
                <button className='bg-green-500 ml-0  mr-5 mt-3 py-0 px-3'>Submit</button>
            </div>
        </form >)
}

export default AddInfoTeachingStaff