import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ScrollToTop from '../../UI/ScrollToTop'
import Loader from '../../UI/Loader' // Import the Loader component
import { generateRow1, generateRow2, generateRow3, generateRow4 } from '../../scripts'
import './schedule.css'


// const sunday8 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "8:00");
// const sunday9 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "9:00");
// const sunday10 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "10:00");
// const sunday11 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "11:00");
// const sunday12 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "12:00");
// const sunday13 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "13:00");
// const sunday14 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "14:00");
// const sunday15 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "15:00");
// const sunday16 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "16:00");
// const sunday17 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "17:00");
// const sunday18 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "18:00");
// const sunday19 = appointments.appointments.find(appointment => appointment.day.toLowerCase() === "sunday" && appointment.startTime === "19:00");

// const { sunday8, sunday9, sunday10, sunday11, sunday12, sunday13, sunday14, sunday15, sunday16, sunday17, sunday18, sunday19 } = generateAppointments("Sunday", 8, 19);
// const { monday8, monday9, monday10, monday11, monday12, monday13, monday14, monday15, monday16, monday17, monday18, monday19 } = generateAppointments("Monday", 8, 19);
// const { tuesday8, tuesday9, tuesday10, tuesday11, tuesday12, tuesday13, tuesday14, tuesday15, tuesday16, tuesday17, tuesday18, tuesday19 } = generateAppointments("Tuesday", 8, 19);
// const { wednesday8, wednesday9, wednesday10, wednesday11, wednesday12, wednesday13, wednesday14, wednesday15, wednesday16, wednesday17, wednesday18, wednesday19 } = generateAppointments("Wednesday", 8, 19);
// const { thursday8, thursday9, thursday10, thursday11, thursday12, thursday13, thursday14, thursday15, thursday16, thursday17, thursday18, thursday19 } = generateAppointments("Thursday", 8, 19);

const Schedule = () => {
    const username = useSelector((state) => state.auth.user.userName)
    const data = useSelector((state) => state.auth.user.schedule)
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        if (data) {
            setLoading(false); // Set loading to false when data is available
        }
    }, [data]);

    const generateAppointments = (day, start, end) => {
        const appointmentsObj = {};
        for (let i = start; i <= end; i++) {
            const appointmentKey = `${day.toLowerCase()}${i}`;
            appointmentsObj[appointmentKey] = data.find(e =>
                e.day.toLowerCase() === day.toLowerCase() && e.startTime === i
            );
        }
        return appointmentsObj;
    };

    const apps = {
        ...generateAppointments("Sunday", 8, 19),
        ...generateAppointments("Monday", 8, 19),
        ...generateAppointments("Tuesday", 8, 19),
        ...generateAppointments("Wednesday", 8, 19),
        ...generateAppointments("Thursday", 8, 19),
    };

    if (loading) {
        return <Loader />; // Display Loader while loading
    }

    return (
        <div className='bg-[#0060E42B] mt-16'>
            <ScrollToTop />
            <div className='flex justify-between px-20 items-center'>
                <img src="/Images/Schedule/Assiut_University_logo 1.png" className='w-[100px]' />
                <span className='text-[#0060E4] text-[50px] font-semibold'> {username}</span>
                <img src="/Images/Schedule/fci.png" className='w-[140px] h-36' />
            </div>
            <div>
                <div>
                    <table>
                        <thead>
                            <tr className='sticky top-16 z-50'>
                                <th></th>
                                <th>Sunday</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='time'>08:00 - 09:00</td>
                                {generateRow1(apps)}
                            </tr>
                            <tr>
                                <td className='time'>09:00 - 10:00</td>
                                {generateRow2(apps)}
                            </tr>
                            <tr>
                                <td className='time'>10:00 - 11:00</td>
                                {generateRow3(apps)}
                            </tr>
                            <tr>
                                <td className='time'>11:00 - 12:00</td>
                                {generateRow4(apps, 8, 9, 10, 11)}
                            </tr>
                            <tr>
                                <td className='time'>12:00 - 13:00</td>
                                {generateRow4(apps, 9, 10, 11, 12)}
                            </tr>
                            <tr>
                                <td className='time'>13:00 - 14:00</td>
                                {generateRow4(apps, 10, 11, 12, 13)}
                            </tr>
                            <tr>
                                <td className='time'>14:00 - 15:00</td>
                                {generateRow4(apps, 11, 12, 13, 14)}
                            </tr>
                            <tr>
                                <td className='time'>15:00 - 16:00</td>
                                {generateRow4(apps, 12, 13, 14, 15)}
                            </tr>
                            <tr>
                                <td className='time'>16:00 - 17:00</td>
                                {generateRow4(apps, 13, 14, 15, 16)}
                            </tr>
                            <tr>
                                <td className='time'>17:00 - 18:00</td>
                                {generateRow4(apps, 14, 15, 16, 17)}
                            </tr>
                            <tr>
                                <td className='time'>18:00 - 19:00</td>
                                {generateRow4(apps, 15, 16, 17, 18)}
                            </tr>
                            <tr>
                                <td className='time'>19:00 - 20:00</td>
                                {generateRow4(apps, 16, 17, 18, 19)}
                            </tr>
                        </tbody>
                    </table >
                </div >
            </div>
        </div>
    )
}

export default Schedule
