import Cookies from "js-cookie";
import api from ".";

export const userLogin = async (email, password) => {
    const response = await api.post(`/auth/login`, {
        email,
        password,
    });
    localStorage.setItem("token", response.data.token);
    Cookies.set("refreshToken", response.data.refreshToken, { expires: 1 });
    return response;
};

export const userRegister = async (values) => {
    const response = await api.post(`/auth/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
    });
    return response;
};

export const getCustomerApi = async (userId) => {
    const response = await api.get(`/user/${userId}`);
    return response;
};

export const updateCustomerProfileApi = async (values) => {
    const response = await api.patch(`/user/customer_profile/${values.id}`, {
        name: values.name,
        tel_no: values.tel_no,
        address: values.address,
    });
    return response;
};
//! Important function to refresh the token -> do not delete

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
