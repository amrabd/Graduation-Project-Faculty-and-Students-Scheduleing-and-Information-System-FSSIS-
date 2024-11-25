export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
});

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataRequest());

        fetch('https://localhost:44377/api/ITTechnical/GetHallsWithDevices')
            .then(response => response.json())
            .then(data => dispatch(fetchDataSuccess(data)))
            .catch(error => dispatch(fetchDataFailure(error)));
    };
};

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const halls = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null,
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default halls;
