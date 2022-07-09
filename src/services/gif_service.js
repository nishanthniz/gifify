import { httpGet } from "./http_service";

export const getTrendingGifs = async (apiUrl) => {
    const appendedUrl = `${apiUrl}`;
    const apiResponse = await httpGet(appendedUrl);
    return apiResponse;
}

export const getGifsData = async (apiUrl, searchValue, nextKey) => {
    let appendedUrl = `${apiUrl}?media_filter=gif`;
    if (searchValue) {
        appendedUrl = `${appendedUrl}&q=${searchValue}`;
    }
    if (nextKey) {
        appendedUrl = `${appendedUrl}&pos=${nextKey}`;
    }
    const apiResponse = await httpGet(appendedUrl);
    return apiResponse;
}