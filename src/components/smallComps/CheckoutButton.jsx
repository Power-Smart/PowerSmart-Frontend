import React, { useEffect, useState } from 'react'
import crypto from 'crypto-js';
import { getOrderCustomerDetailApi } from '../../api/apiPayment';

const CheckoutButton = ({ userID, total }) => {
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
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        getOrderCustomerDetailApi(userID).then(res => res.data)
            .then(data => {
                setAmount(data.totalBill);
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

    window.payhere.onCompleted = function onCompleted(orderId) {
        console.log("Payment completed. OrderID:" + orderId);
    };

    window.payhere.onDismissed = function onDismissed() {
        console.log("Payment dismissed");
    };

    window.payhere.onError = function onError(error) {
        console.log("Error:" + error);
    };


    function checkout(e) {
        e.preventDefault();

        const data = {
            "sandbox": true,
            "merchant_id": merchant_id, // ??
            "return_url": undefined, // ??
            "cancel_url": undefined, // ??
            "notify_url": "http://sample.com/notify", // ??
            "order_id": userID, // ?
            "items": "Total Bill", // ?
            "amount": amount, // ?
            "currency": "LKR", // ?
            "first_name": userData.first_name, // ?
            "last_name": userData.last_name, // ?
            "email": userData.email, // ?
            "phone": userData.phone, // ?
            "address": userData.address, // ?
            "city": userData.city, // !
            "country": userData.country, // !
            "custom_1": "",
            "custom_2": "",
            hash: createHash(userID, amount, "LKR"),
        }
        console.log(data);
        if (!error && total > 0 && total == amount) {
            window.payhere.startPayment(data);
        } else {
            alert("Payment can't be done.");
        }
    }



    return (
        <button className='px-8 py-1 bg-[#83BCFF] rounded-md text-black' onClick={checkout}>Checkout</button>
    )
}

export default CheckoutButton