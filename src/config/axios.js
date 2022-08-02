import axios from "axios";

const clientAxios = axios.create({
    baseUrl: 'http://localhost:3001'
});

export default clientAxios;