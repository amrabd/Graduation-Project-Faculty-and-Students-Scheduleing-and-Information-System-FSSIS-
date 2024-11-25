import { loginStart, loginSuccess, loginFailure, logout } from './Pages/Login/loginSlice';
import authService from './authService'; // Your authentication service

// Your login action creator
export const login = (Ssn, password, navigate) => async (dispatch) => {
    try {
        dispatch(loginStart());
        const response = await authService.login(Ssn, password);
        console.log('API Response:', response);

        const { token, ssn, role, userName, schedule } = response;
        authService.setAuthHeader(token);
        localStorage.setItem('userData', JSON.stringify({
            userName,
            ssn,
            role,
            schedule
        }));

        localStorage.setItem('token', token);

        dispatch(loginSuccess({ ssn, role, userName, token, schedule }));
        console.log("Login succ: ", userName, "Token", token, "role", role);

        if (role === 'ITTechnical') {
            navigate('/ithome');
        } else {
            navigate('/home');
        }

    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const logoutUser = (navigate) => async (dispatch) => {
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    authService.removeAuthHeader();
    dispatch(logout());
    navigate("/")
};