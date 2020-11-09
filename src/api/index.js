import axios from 'axios';

const instance = axios.create({
    baseURL: "https://my-channel-backend.herokuapp.com"
});

export default instance;