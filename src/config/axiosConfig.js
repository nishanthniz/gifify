import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const instance = axios.create({
    baseURL: "https://tenor.googleapis.com/v2"
});

instance.interceptors.request.use((request) => {
    if (navigator.onLine) {
        request.url = `${request.url}${request.url.includes('?') ? '&' : '?'}key=${process.env.REACT_APP_TENOR_API_KEY}`;
        return request;
    } else {
        toast.warn("Please check your internet connection");
    }
});

instance.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    if (error.response.status === 400 || error.response.status === 401) {
        toast.error('Invalid token');
    } else {
        toast.error('Something went wrong.');
    }
});

export default instance;