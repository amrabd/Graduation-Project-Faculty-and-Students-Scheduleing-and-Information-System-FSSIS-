import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';
import Navbar from './Navbar';
import ITNavBar from './ITNavBar';
import AdminNavBar from './AdminNavBar';
import { useSelector } from 'react-redux';



const AppLayout = () => {
    const navigate = useNavigation();
    const isLoading = navigate.state === "loading";
    console.log(navigate);
    const role = useSelector((state) => state.auth.user.role)

    return (
        <>
            {role === "TA Admin" ? <AdminNavBar /> :
                role === "ITTechnical" ? <ITNavBar /> :
                    (role === "TA" || role === "Professor" || role === "Student") ? <Navbar /> : null}
            {isLoading && <Loader />}
            <Outlet />
        </>
    )
}

export default AppLayout