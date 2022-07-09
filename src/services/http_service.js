import axios from "../config/axiosConfig";

export const httpGet = async (apiUrl) => {
    const apiResp = await axios.get(apiUrl);
    return apiResp;
};