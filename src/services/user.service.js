import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000/api/test/';

export const getPublicContent = () => {
    return axios.get(API_URL + 'all');
};

export const getUserBoard = () => {
    return axios.get(API_URL + 'user', { headers: authHeader() });
};