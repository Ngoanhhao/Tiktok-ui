import axios from "axios";

const Request = axios.create ({
    baseURL:"https://tiktok.fullstack.edu.vn/api/"
})

export default Request;