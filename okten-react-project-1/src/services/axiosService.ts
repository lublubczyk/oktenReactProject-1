import axios from "axios";
import { urls } from "../constants/urls";

const axiosMoviesService = axios.create({ baseURL: urls.baceURL.baceMovies });

axiosMoviesService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${urls.token}`;
    return request;
});

export { axiosMoviesService};