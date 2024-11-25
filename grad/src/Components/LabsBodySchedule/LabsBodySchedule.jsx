import { useEffect, useState } from "react";
import Loader from "../../UI/Loader";
import { useScheduleCells, useScheduleCells2, useScheduleCells3, useScheduleCells4 } from "./labsScripts"
const LabsBodySchedule = ({ day }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 2 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        // Clear the timer to prevent memory leaks
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
         {
            loading &&
             <Loader/>
            }
            <tr className='text-center'>
                <td colSpan={30} className='bg-[#0060E4] text-white text-5xl font-bold sticky z-50 top-[166px]'>{day}</td>
            </tr>
            <tr>
                <td className='time'>08:00 - 09:00</td>
                {useScheduleCells(day, ['1', '2', '3', '4', '5'])}
                <td className='time'>08:00 - 09:00</td>
                {useScheduleCells(day, ['6', '7', '8', '9', '10'])}
                <td className='time'>08:00 - 09:00</td>
                {useScheduleCells(day, ['11', '12', '13', '14', '15'])}
                <td className='time'>08:00 - 09:00</td>
                {useScheduleCells(day, ['16', '17', '18', '19', '20'])}
                <td className='time'>08:00 - 09:00</td>
                {useScheduleCells(day, ['21', '22', '23', '24', '25'])}
            </tr>
            <tr>
                <td className='time'>09:00 - 10:00</td>
                {useScheduleCells2(day, ['1', '2', '3', '4', '5'])}
                <td className='time'>09:00 - 10:00</td>
                {useScheduleCells2(day, ['6', '7', '8', '9', '10'])}
                <td className='time'>09:00 - 10:00</td>
                {useScheduleCells2(day, ['11', '12', '13', '14', '15'])}
                <td className='time'>09:00 - 10:00</td>
                {useScheduleCells2(day, ['16', '17', '18', '19', '20'])}
                <td className='time'>09:00 - 10:00</td>
                {useScheduleCells2(day, ['21', '22', '23', '24', '25'])}
            </tr>
            <tr>
                <td className='time'>10:00 - 11:00</td>
                {useScheduleCells3(day, ['1', '2', '3', '4', '5'])}
                <td className='time'>10:00 - 11:00</td>
                {useScheduleCells3(day, ['6', '7', '8', '9', '10'])}
                <td className='time'>10:00 - 11:00</td>
                {useScheduleCells3(day, ['11', '12', '13', '14', '15'])}
                <td className='time'>10:00 - 11:00</td>
                {useScheduleCells3(day, ['16', '17', '18', '19', '20'])}
                <td className='time'>10:00 - 11:00</td>
                {useScheduleCells3(day, ['21', '22', '23', '24', '25'])}
            </tr>
            <tr>
                <td className='time'>11:00 - 12:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 8, 9, 10, 11)}
                <td className='time'>11:00 - 12:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 8, 9, 10, 11)}
                <td className='time'>11:00 - 12:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 8, 9, 10, 11)}
                <td className='time'>11:00 - 12:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 8, 9, 10, 11)}
                <td className='time'>11:00 - 12:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 8, 9, 10, 11)}
            </tr>
            <tr>
                <td className='time'>12:00 - 13:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 9, 10, 11, 12)}
                <td className='time'>12:00 - 13:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 9, 10, 11, 12)}
                <td className='time'>12:00 - 13:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 9, 10, 11, 12)}
                <td className='time'>12:00 - 13:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 9, 10, 11, 12)}
                <td className='time'>12:00 - 13:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 9, 10, 11, 12)}
            </tr><tr>
                <td className='time'>13:00 - 14:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 10, 11, 12, 13)}
                <td className='time'>13:00 - 14:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 10, 11, 12, 13)}
                <td className='time'>13:00 - 14:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 10, 11, 12, 13)}
                <td className='time'>13:00 - 14:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 10, 11, 12, 13)}
                <td className='time'>13:00 - 14:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 10, 11, 12, 13)}
            </tr><tr>
                <td className='time'>14:00 - 15:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 11, 12, 13, 14)}
                <td className='time'>14:00 - 15:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 11, 12, 13, 14)}
                <td className='time'>14:00 - 15:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 11, 12, 13, 14)}
                <td className='time'>14:00 - 15:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 11, 12, 13, 14)}
                <td className='time'>14:00 - 15:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 11, 12, 13, 14)}
            </tr><tr>
                <td className='time'>15:00 - 16:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 12, 13, 14, 15)}
                <td className='time'>15:00 - 16:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 12, 13, 14, 15)}
                <td className='time'>15:00 - 16:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 12, 13, 14, 15)}
                <td className='time'>15:00 - 16:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 12, 13, 14, 15)}
                <td className='time'>15:00 - 16:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 12, 13, 14, 15)}
            </tr><tr>
                <td className='time'>16:00 - 17:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 13, 14, 15, 16)}
                <td className='time'>16:00 - 17:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 13, 14, 15, 16)}
                <td className='time'>16:00 - 17:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 13, 14, 15, 16)}
                <td className='time'>16:00 - 17:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 13, 14, 15, 16)}
                <td className='time'>16:00 - 17:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 13, 14, 15, 16)}
            </tr><tr>
                <td className='time'>17:00 - 18:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 14, 15, 16, 17)}
                <td className='time'>17:00 - 18:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 14, 15, 16, 17)}
                <td className='time'>17:00 - 18:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 14, 15, 16, 17)}
                <td className='time'>17:00 - 18:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 14, 15, 16, 17)}
                <td className='time'>17:00 - 18:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 14, 15, 16, 17)}
            </tr><tr>
                <td className='time'>18:00 - 19:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 15, 16, 17, 18)}
                <td className='time'>18:00 - 19:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 15, 16, 17, 18)}
                <td className='time'>18:00 - 19:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 15, 16, 17, 18)}
                <td className='time'>18:00 - 19:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 15, 16, 17, 18)}
                <td className='time'>18:00 - 19:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 15, 16, 17, 18)}
            </tr><tr>
                <td className='time'>19:00 - 20:00</td>
                {useScheduleCells4(day, ['1', '2', '3', '4', '5'], 16, 17, 18, 19)}
                <td className='time'>19:00 - 20:00</td>
                {useScheduleCells4(day, ['6', '7', '8', '9', '10'], 16, 17, 18, 19)}
                <td className='time'>19:00 - 20:00</td>
                {useScheduleCells4(day, ['11', '12', '13', '14', '15'], 16, 17, 18, 19)}
                <td className='time'>19:00 - 20:00</td>
                {useScheduleCells4(day, ['16', '17', '18', '19', '20'], 16, 17, 18, 19)}
                <td className='time'>19:00 - 20:00</td>
                {useScheduleCells4(day, ['21', '22', '23', '24', '25'], 16, 17, 18, 19)}
            </tr>
        </>
    )
}

export default LabsBodySchedule