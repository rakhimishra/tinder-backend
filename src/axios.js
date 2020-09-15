import axios from 'axios';
const instance = axios.create({
    baseURL:'https://tinder-server-backend.herokuapp.com/'
})
export default instance;