import axios from "axios";

import { urls } from "../constants";

const axiosService = axios.create({ baseURL: urls.baseURL.movies });

axiosService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${urls.token}`;
    return request;
});

export { axiosService };