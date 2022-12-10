import axios from "axios";
/*eslint-disable*/
import { setupInterceptorsTo } from "../interceptor";
const data = JSON.parse(localStorage.getItem("userData"))

const config = {
    headers: { 'content-type': 'multipart/form-data' }
}

const API = setupInterceptorsTo(

    axios.create({

        baseURL: "http://localhost:5006"
        // baseURL: "https://furniture-store-app.herokuapp.com"

    }));
const PAYMENTAPI = setupInterceptorsTo(
    axios.create({

        baseURL: "http://localhost:5002"
        // baseURL: "https://furniture-store-app.herokuapp.com"

    }));
const CARTAPI = setupInterceptorsTo(

    axios.create({

        baseURL: "http://localhost:5003"
        // baseURL: "https://furniture-store-app.herokuapp.com"

    }));
const USERAPI = axios.create({

    baseURL: "http://localhost:5005"
    // baseURL: "https://furniture-store-app.herokuapp.com"

});

export const userFormSignup = (signupFormData) => USERAPI.put("/api/user/add", signupFormData);
export const userLogin = (signinFormData) => USERAPI.post("/api/user/login", signinFormData);
export const addProduct = (productData) => API.put("/api/product/add", productData);
export const uploadProductImage = (productImage) => API.post("/api/product/upload-images", productImage);
export const getAllProducts = () => API.get("/api/product/getAll");
export const createCart = (data) => CARTAPI.put("/api/shoppingCart/create", data);
export const getCartId = (id) => CARTAPI.get(`/api/shoppingCart/getCartId/${id}`);
export const addToCart = (data) => CARTAPI.put("/api/productInCart/add", data);
export const viewCart = (cartId) => CARTAPI.get(`/api/productInCart/get/${cartId}`);
export const removeFromCart = (productId) => CARTAPI.delete(`/api/productInCart/remove/${productId}`);
export const paymentDetails = (data) => PAYMENTAPI.put(`/api/paymentDetails/add`, data);
export const delProductsFromCart = (cartId) => CARTAPI.delete(`/api/productInCart/remove/cartProducts/${cartId}`);

// export const viewCart = (data) => CARTAPI.put("/api/productInCart/add", data);


