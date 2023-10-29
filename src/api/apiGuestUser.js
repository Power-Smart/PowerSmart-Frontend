import api from ".";

export const insertGuestUser = async (data) => {
    const response = await api.post(`/guestUser`,data);
    return response;
}

export const addGuestUserSuggest = async (data) => {
    const response = await api.post(`/guestUser/addSuggest`,data);
    return response;
}

export const getGuestUserSuggest = async (customerID) => {
    try{
        const response = await api.get(`/guestUser/:${customerID}`);

        if((response.status >= 200) && (response.status < 300)){
            return response;
        }else{
            throw new Error("Response error"); 
        }
    }catch(error){
        if(error.message === "Response error"){
            return error.message;
        }
    }
}
