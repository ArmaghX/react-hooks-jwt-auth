import axios from 'axios';
const apiAuthUrl  = process.env.REACT_APP_API_URL_AUTH;

export const register = (username, email, password) => {
    return axios
    .post(apiAuthUrl + 'signup', 
        {
            username,
            email,
            password
        },
    )
    .then(response => {
        if(response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    })
    .catch(() => {
        return ({error: 'Username or Email already exist.'})
    });
};

export const login = (username, password) => {
    return axios
        .post(apiAuthUrl + 'signin', {
            username,
            password
        })
        .then(response => {
            if(response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch(() => {
            return ({error: 'User or Password are incorrect. Please try again.'})
        });
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};