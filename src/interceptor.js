import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";


// const API_URL = process.env.NEXT_PUBLIC_ENDPOINT_AUTH;

const onRequest = (config) => {
    const token = JSON.parse(localStorage.getItem("accessToken"));
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
};

const onRequestError = (error) => {
    return Promise.reject(error);
};

const onResponse = (response) => {
    console.log(response);
    return response;
};

const onResponseError = async (error) => {
    console.log(error);
    if (error.response) {
        // Access Token was expired
        if (
            error.response.data.statusCode === 500 &&
            error.response.data.message === "jwt expired"
        ) {
            const storedToken = JSON.parse(localStorage.getItem("refreshToken"));

            try {
                const { data } = await axios.post(`http://localhost:5005/api/user/newAccessToken`, {
                    refreshToken: storedToken,
                });
                // console.log(rs);

                const { token } = data;
                console.log(token);
                localStorage.setItem("accessToken", JSON.stringify(token));
                // localStorage.setItem("userData", JSON.stringify(user));
                const prevRequest = error?.config;
                return axios({
                    ...prevRequest,
                    headers: { ...prevRequest.headers, Authorization: `Bearer ${token}` },
                    sent: true
                });
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
    }
    return Promise.reject(error);
};

export const setupInterceptorsTo = (axiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
};