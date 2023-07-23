import axios from "axios";
import Cookies from "js-cookie";

const URL = `${import.meta.env.VITE_APP_API_URL}:${
    import.meta.env.VITE_APP_API_PORT
}`;

export const userLogin = async (email, password) => {
    const response = await axios.post(`${URL}/auth/login`, {
        email,
        password,
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.name);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("role", response.data.role);
    Cookies.set("refreshToken", response.data.refreshToken, { expires: 1 });
    return response;
};

export const userRegister = async (values) => {
    const response = await axios.post(`${URL}/auth/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
    });
    return response;
};

// Important function to refresh the token -> do not delete

// axios
//     .post(`${URL}/auth/login`, {
//         email,
//         password,
//     })
//     .then((response) => {
//         localStorage.setItem("token", response.data.token);
//         Cookies.set("refreshToken", response.data.refreshToken, {
//             expires: 1,
//         });
//         return response.data;
//     })
//     .catch((error) => {
//         axios
//             .post(`${URL}/auth/token`, {
//                 refreshToken: Cookies.get("refreshToken"),
//             })
//             .then((response) => {
//                 localStorage.setItem("token", response.data.token);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     });
