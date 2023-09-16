import React, { useEffect, useState } from 'react'
import crypto from 'crypto-js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrder } from '../../redux/slices/orderSlice';
import { getOrderCustomerDetailApi, getOrderTotalApi } from '../../api/apiPayment';

const CheckoutButton = ({ userID, total, setChecked, checkedList }) => {
    const dispatch = useDispatch();
    const merchant_id = import.meta.env.VITE_APP_MERCHANT_ID;
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        getOrderCustomerDetailApi(userID).then(res => res.data)
            .then(data => {
                const userData = data.userData;
                console.log(userData);
                setUserData({
                    first_name: userData.user.first_name,
                    last_name: userData.user.last_name,
                    email: userData.user.email,
                    phone: userData.tel_no[0],
                    address: userData.address,
                    city: "Colombo",
                    country: "Sri Lanka",
                })
                setError(null);
            }).catch(err => setError(err));
    }, []);


    const createHash = (order_id, amount, currency) => {
        const merchant_secret = import.meta.env.VITE_APP_MERCHANT_SECRET;
        const hashed_secret = crypto.MD5(merchant_secret).toString().toUpperCase();
        let amountFormated = parseFloat(amount).toLocaleString('en-us', { minimumFractionDigits: 2 }).replaceAll(',', '');
        let hash = crypto.MD5(merchant_id + order_id + amountFormated + currency + hashed_secret).toString().toUpperCase();
        return hash;
    }

    const encryptPlaceDetails = (placeArray) => {
        const merchant_secret = import.meta.env.VITE_APP_MERCHANT_SECRET;
        const hashStr = `${placeArray.join('')}${merchant_secret}`;
        return crypto.SHA1(hashStr).toString().toUpperCase();
    }

    window.payhere.onCompleted = function onCompleted(orderId) {
        dispatch(fetchOrder(userID));
        setChecked({});
        console.log("Payment completed. OrderID:" + orderId);

    };

    window.payhere.onDismissed = function onDismissed() {
        console.log("Payment dismissed");
    };

    window.payhere.onError = function onError(error) {
        console.log("Error:" + error);
    };


    async function checkout(e) {
        e.preventDefault();
        const notifyURL = import.meta.env.VITE_APP_NOTIFY_URL;
        try {
            const res = await getOrderTotalApi(userID, checkedList);
            const amount = res.data.total;
            const places = res.data.places;

            const data = {
                "sandbox": true,
                "merchant_id": merchant_id,
                "return_url": undefined,
                "cancel_url": undefined,
                "notify_url": `${notifyURL}/payment/customer/checkout`,
                "order_id": userID,
                "items": "Total Bill",
                "amount": amount,
                "currency": "LKR",
                "first_name": userData.first_name,
                "last_name": userData.last_name,
                "email": userData.email,
                "phone": userData.phone,
                "address": userData.address,
                "city": userData.city, // !
                "country": userData.country, // !
                "custom_1": places.toString(),
                "custom_2": encryptPlaceDetails(places),
                "hash": createHash(userID, amount, "LKR"),
            }
            console.log(data);
            if (!error && total > 0 && total == amount) {
                window.payhere.startPayment(data);
            } else {
                alert("Payment can't be done.");
            }
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <button className='px-8 py-1 bg-[#83BCFF] rounded-md text-black' onClick={checkout}>Checkout</button>
    )
}

export default CheckoutButton