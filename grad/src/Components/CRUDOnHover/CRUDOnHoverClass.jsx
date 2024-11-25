import axios from 'axios';
import React from 'react'

const CRUDOnHoverClass = ({ id, show, onToggle}) => {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://localhost:44377/api/Admin/DeleteClass`, {
                data: { id: id }
            });
            console.log('Delete successful:', response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting item:', error); 
        }
    };

    if (show) return null; // Only return null when show is false

    return (
        <div className={`absolute w-[93%] h-[98%] inset-0 left-2 top-[2px] bg-gray-300 rounded-r-lg border-l-8 border-solid border-blue-800 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100`}>
            <div onClick={onToggle}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                    <path d="M41.2308 25.0054C40.747 25.0054 40.283 25.2049 39.9409 25.56C39.5987 25.9151 39.4065 26.3967 39.4065 26.8988V38.2592C39.4065 38.7613 39.2143 39.2429 38.8722 39.598C38.5301 39.9531 38.0661 40.1526 37.5822 40.1526H12.0422C11.5584 40.1526 11.0944 39.9531 10.7522 39.598C10.4101 39.2429 10.2179 38.7613 10.2179 38.2592V11.7517C10.2179 11.2495 10.4101 10.7679 10.7522 10.4129C11.0944 10.0578 11.5584 9.85831 12.0422 9.85831H22.9879C23.4718 9.85831 23.9358 9.65882 24.2779 9.30375C24.62 8.94867 24.8122 8.46707 24.8122 7.96492C24.8122 7.46276 24.62 6.98117 24.2779 6.62609C23.9358 6.27101 23.4718 6.07153 22.9879 6.07153H12.0422C10.5907 6.07153 9.19866 6.66997 8.1723 7.73521C7.14594 8.80045 6.56934 10.2452 6.56934 11.7517V38.2592C6.56934 39.7656 7.14594 41.2104 8.1723 42.2757C9.19866 43.3409 10.5907 43.9393 12.0422 43.9393H37.5822C39.0337 43.9393 40.4258 43.3409 41.4521 42.2757C42.4785 41.2104 43.0551 39.7656 43.0551 38.2592V26.8988C43.0551 26.3967 42.8629 25.9151 42.5208 25.56C42.1787 25.2049 41.7146 25.0054 41.2308 25.0054ZM13.8665 26.4444V34.4724C13.8665 34.9745 14.0587 35.4561 14.4008 35.8112C14.7429 36.1663 15.2069 36.3658 15.6908 36.3658H23.4258C23.6659 36.3672 23.9039 36.3195 24.1261 36.2252C24.3484 36.131 24.5505 35.9922 24.721 35.8167L37.3451 22.6955L42.5261 17.4319C42.6971 17.2559 42.8328 17.0464 42.9254 16.8157C43.018 16.585 43.0657 16.3375 43.0657 16.0876C43.0657 15.8376 43.018 15.5901 42.9254 15.3594C42.8328 15.1287 42.6971 14.9193 42.5261 14.7433L34.7911 6.62061C34.6215 6.44314 34.4197 6.30229 34.1974 6.20616C33.9751 6.11004 33.7367 6.06055 33.4958 6.06055C33.255 6.06055 33.0166 6.11004 32.7943 6.20616C32.572 6.30229 32.3702 6.44314 32.2006 6.62061L27.0561 11.9789L14.3955 25.1001C14.2265 25.277 14.0927 25.4868 14.0019 25.7175C13.9111 25.9482 13.8651 26.1952 13.8665 26.4444ZM33.4958 10.6346L38.6586 15.9929L36.0681 18.6815L30.9053 13.3232L33.4958 10.6346ZM17.5151 27.2207L28.3331 15.9929L33.4958 21.3512L22.6778 32.579H17.5151V27.2207Z" fill="#0060E4" />
                </svg>
            </div>
            <div onClick={handleDelete}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                    <path d="M14.5833 43.75C13.4374 43.75 12.4569 43.3424 11.6416 42.5271C10.8263 41.7118 10.418 40.7306 10.4166 39.5833V12.5H8.33325V8.33333H18.7499V6.25H31.2499V8.33333H41.6666V12.5H39.5833V39.5833C39.5833 40.7292 39.1756 41.7104 38.3603 42.5271C37.5451 43.3438 36.5638 43.7514 35.4166 43.75H14.5833ZM18.7499 35.4167H22.9166V16.6667H18.7499V35.4167ZM27.0833 35.4167H31.2499V16.6667H27.0833V35.4167Z" fill="#F24E1E" />
                </svg>
            </div>
        </div>
    )
}

export default CRUDOnHoverClass