import axios from "axios";
/*eslint-disable*/



const API = axios.create({

    baseURL: "http://localhost:5000"

});

export const userFormSignup = (signupFormData) => API.put("/api/user/add", signupFormData);
export const userLogin = (signinFormData) => API.post("/api/user/login", signinFormData);