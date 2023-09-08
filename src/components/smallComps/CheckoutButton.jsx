import React from 'react'
import crypto from 'crypto-js';

const CheckoutButton = ({ userID, orderID, total }) => {
    const merchant_id = import.meta.env.VITE_APP_MERCHANT_ID;

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

    const data = {
        "sandbox": true,
        "merchant_id": merchant_id,
        "return_url": undefined,
        "cancel_url": undefined,
        "notify_url": "http://sample.com/notify",
        "order_id": "ItemNo12345",
        "items": "Total Bill",
        "amount": total,
        "currency": "LKR",
        "first_name": "Saman",
        "last_name": "Perera",
        "email": "samanp@gmail.com",
        "phone": "0771234567",
        "address": "No.1, Galle Road",
        "city": "Colombo",
        "country": "Sri Lanka",
        "delivery_address": "No. 46, Galle road, Kalutara South",
        "delivery_city": "Kalutara",
        "delivery_country": "Sri Lanka",
        "custom_1": "",
        "custom_2": "",
        hash: createHash("ItemNo12345", total, "LKR"),
    }

    function checkout(e) {
        window.payhere.startPayment(data);
    }



    return (
        <button className='px-8 py-1 bg-[#83BCFF] rounded-md text-black' onClick={checkout}>Checkout</button>
    )
}

export default CheckoutButton