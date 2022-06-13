import axios from "axios";
import Store from "../scripts/store";
//import { requestInProcess } from "../scripts/reactivity";
import router from "./router";

export default axios.create({});
axios.defaults.baseURL = String(import.meta.env.VITE_API_URL);

axios.defaults.headers.common['Authorization'] = Store.userJwt;

/* axios.interceptors.request.use(function (request) {
    requestInProcess.value = true;
    return request;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})
axios.interceptors.response.use(
    function (response) {
        requestInProcess.value = false;
        return response;
    },
    function (error) {
        requestInProcess.value = false;
        if (!error.response || error.response?.data.includes("Proxy"))
            router.push("/serverError");
        else if (error.response?.status == 401) {
            router.push("/login");
        }
/*         else if (error.response?.data == "Wrong login credentials")
            showSnackbar("Неверный логин или пароль"); 
    }
); */

export function setAuthHeader(token: string) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}