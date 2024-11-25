import React, { useEffect } from 'react'
import DevicesRedBox from '../../Components/DevicesRedBox/DevicesRedBox'
import DevicesYellowBox from '../../Components/DevicesYellowBox/DevicesYellowBox'
import DevicesGreenBox from '../../Components/DevicesGreenBox/DevicesGreenBox'
import ScrollToTop from '../../UI/ScrollToTop'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './hallSlice'
import Loader from '../../UI/Loader'

const ITHallDevices9 = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => state.hall);
    const hallData = data.filter(hall => hall.hallName === "مدرج9");
    console.log(hallData);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    console.log(data, isLoading, error);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='mb-5'>
            <ScrollToTop />
            <div className="flex justify-center pt-8 mt-16" >
                <div className="bg-[#0060E4] text-gradient rounded-2xl shadow-md h-16 w-52  text-center flex justify-center items-center">
                    <h1 className="text-4xl font-medium text-[#FFFFFF]">مدرج 9</h1>
                </div>
            </div>
            <div className="h-16 w-96 bg-[#0060E4] text-[#FFFFFF] text-center font-bold pt-2  text-3xl  rounded-r-2xl flex justify-center items-center ">
                <h3>All Devices</h3>
            </div>
            <div className='grid grid-cols-3 place-items-center mx-40 mt-10 gap-5'>
            {hallData.map((e) => (
                    e.devices.map(hall => {
                        return (
                                hall.status === "Good" ?
                                    < DevicesGreenBox
                                        img={`/Images/ITDevices/${hall.deviceName === "AC" ? "Group.png" 
                                        : hall.deviceName === "PC"? "Vector.png" : "Vector (1).png"}`}
                                        name={hall.deviceName}
                                        {...(hall.deviceName === "PC" ? {no: hall.deviceNumber} : {})}
                                        id={hall.deviceId}
                                        /> :
                                    hall.status === "In Repair" ?
                                        < DevicesYellowBox
                                        img={`/Images/ITDevices/${hall.deviceName === "AC" ? "Group.png" 
                                        : hall.deviceName === "PC"? "Vector.png" : "Vector (1).png"}`}
                                        name={hall.deviceName}
                                        {...(hall.deviceName === "PC" ? {no: hall.deviceNumber} : {})}
                                        id={hall.deviceId}
                                        /> :
                                        < DevicesRedBox
                                        img={`/Images/ITDevices/${hall.deviceName === "AC" ? "Group.png" 
                                        : hall.deviceName === "PC"? "Vector.png" : "Vector (1).png"}`}
                                        name={hall.deviceName}
                                        {...(hall.deviceName === "PC" ? {no: hall.deviceNumber} : {})}
                                        id={hall.deviceId}
                                        />
                        )
                    }
                    )
                ))}
            </div>
        </div>

    )
}

export default ITHallDevices9