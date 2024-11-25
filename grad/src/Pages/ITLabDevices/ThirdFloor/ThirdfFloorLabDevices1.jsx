import React, { useEffect } from 'react'
import DevicesGreenBox from '../../../Components/DevicesGreenBox/DevicesGreenBox'
import DevicesRedBox from '../../../Components/DevicesRedBox/DevicesRedBox'
import DevicesYellowBox from '../../../Components/DevicesYellowBox/DevicesYellowBox'
import ScrollToTop from '../../../UI/ScrollToTop'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../UI/Loader'
import { fetchData } from '../labSlice'

const ThirdFloorLabDevices1 = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => state.lab);
    const hallData = data.filter(hall => hall.labName === "3أ");
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
        <div>
            <ScrollToTop />
            <div className="flex justify-center pt-8 mt-16" >
                <div className="bg-[#0060E4] text-gradient rounded-2xl shadow-md h-16 w-52  text-center flex justify-center items-center">
                    <h1 className="text-4xl font-medium text-[#FFFFFF]">معمل 3أ</h1>
                </div>
            </div>
            <div className="h-16 w-96 bg-[#0060E4] text-[#FFFFFF] text-center font-bold pt-2  text-3xl  rounded-r-2xl flex justify-center items-center ">
                <h3>Computers</h3>
            </div>
            <div className='grid grid-cols-3 place-items-center mx-40 mt-10 gap-5'>
                {hallData.map((e) => (
                    e.devices.map(lab => {
                        return (
                            lab.deviceName === "PC" ?
                                lab.status === "Good" ?
                                    < DevicesGreenBox
                                        img={`/Images/ITDevices/Vector.png`}
                                        name={lab.deviceName}
                                        no={lab.deviceNumber}
                                        id={lab.deviceId}
                                    /> :
                                    lab.status === "In Repair" ?
                                        < DevicesYellowBox
                                            img={`/Images/ITDevices/Vector.png`}
                                            name={lab.deviceName}
                                            no={lab.deviceNumber}
                                            id={lab.deviceId}
                                        /> :
                                        < DevicesRedBox
                                            img={`/Images/ITDevices/Vector.png`}
                                            name={lab.deviceName}
                                            no={lab.deviceNumber}
                                            id={lab.deviceId}
                                        /> : null
                        )
                    }
                    )
                ))}
            </div>
            <div className="flex  justify-end my-7"  >
                <div className="h-16 w-96 bg-[#0060E4] text-[#FFFFFF] text-center font-bold pt-2  text-3xl flex justify-center items-center  rounded-l-2xl ">
                    <h3 >Devices specifications</h3>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-[#A3C0D1] w-full h-44 ml-72 mr-72 pt-10  rounded-3xl">
                    {hallData.map((e) => (
                        <p className="text-[#0060E4] text-center text-3xl font-semibold mb-7 -mt-6">
                            {e.deviceSpecifications.ram}GB Memory <br /> {e.deviceSpecifications.processor} <br /> {e.deviceSpecifications.hardDisk}GB HDD <br /> {e.deviceSpecifications.gpu}
                        </p>
                    ))}
                </div>
            </div>
            <div className="h-16 w-96 bg-[#0060E4] text-[#FFFFFF] text-center font-bold pt-2 my-7 text-3xl  rounded-r-2xl flex justify-center items-center ">
                <h3>
                    Other devices
                </h3>
            </div>
            <div className='grid grid-cols-3 place-items-center mx-40 mt-10 gap-5 mb-8'>
                {hallData.map((e) => (
                    e.devices.map(lab => {
                        return (
                            lab.deviceName === "AC" || lab.deviceName === "Projector" ?
                                lab.status === "Good" ?
                                    < DevicesGreenBox
                                        img={`/Images/ITDevices/${lab.deviceName === "AC" ? "Group.png" : "Vector (1).png"}`}
                                        name={lab.deviceName}
                                        id={lab.deviceId}
                                    /> :
                                    lab.status === "In Repair" ?
                                        < DevicesYellowBox
                                            img={`/Images/ITDevices/${lab.deviceName === "AC" ? "Group.png" : "Vector (1).png"}`}
                                            name={lab.deviceName}
                                            id={lab.deviceId}
                                        /> :
                                        < DevicesRedBox
                                            img={`/Images/ITDevices/${lab.deviceName === "AC" ? "Group.png" : "Vector (1).png"}`}
                                            name={lab.deviceName}
                                            id={lab.deviceId}
                                        /> : null
                        )
                    }
                    )
                ))}
            </div>
        </div >

    )
}

export default ThirdFloorLabDevices1