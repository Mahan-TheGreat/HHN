import axios from 'axios';


// API Axios Get Call.
export const getAPICall = (url) => {
    return axios.get(url);
}

// API Axios Post Call.
export const postAPICall = (url, data) => {
    return axios.post(url, data);
}

// API Axios Put Call.
export const putAPICall = (url, data) => {
    return axios.put(url, data);
}

// API Axios Delete Call.
export const deleteAPICall = (url) => {
    return axios.delete(url);
}

// API Axios Login Call.
export const login = (user) => {
    return axios.post('api/Users/Login', user)
}