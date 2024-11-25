import React from 'react'

const AddOnHover = ({ handle, tr }) => {
    return (
        <div onClick={handle} className={`bg-gray-300 w-full h-full rounded-r-lg border-l-8 border-solid border-blue-800 flex justify-center items-center z-50 opacity-0 transition-all delay-100 ${tr && "hidden"} hover:opacity-100`}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                <g clip-path="url(#clip0_341_982)">
                    <path d="M20 0C8.95312 0 0 8.95312 0 20C0 31.0469 8.95312 40 20 40C31.0469 40 40 31.0469 40 20C40 8.95312 31.0469 0 20 0ZM31.6641 21.6641C31.6641 22.5859 30.9219 23.3281 30 23.3281H23.3359V30C23.3359 30.9219 22.5938 31.6641 21.6719 31.6641H18.3359C17.4141 31.6641 16.6719 30.9141 16.6719 30V23.3359H10C9.07812 23.3359 8.33594 22.5859 8.33594 21.6719V18.3359C8.33594 17.4141 9.07812 16.6719 10 16.6719H16.6641V10C16.6641 9.07812 17.4062 8.33594 18.3281 8.33594H21.6641C22.5859 8.33594 23.3281 9.08594 23.3281 10V16.6641H30C30.9219 16.6641 31.6641 17.4141 31.6641 18.3281V21.6641Z" fill="#0060E4" />
                </g>
                <defs>
                    <clipPath id="clip0_341_982">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default AddOnHover