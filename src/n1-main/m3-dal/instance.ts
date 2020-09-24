import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL:
    // "http://localhost:7542/2.0/" //local
        'https://neko-back.herokuapp.com/2.0'
    // -- на heroku
    ,
    withCredentials: true
});