import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tag } from "antd";
import { getAllPaymentsApi } from "../../../api/apiAdmin";

const PaymentsTable = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPaymentsApi();
        setPayments(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto py-2">
      <table className="w-full text-sm text-white">
        <thead className="text-xs text-gray-400 uppercase">
          <tr>
            <th scope="col" className="px-0 py-3">
              Payment Id
            </th>
            <th scope="col" className="px-0 py-3">
              Customer Id
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Type
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Timestamp
            </th>
            <th scope="col" className="px-0 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => {
            // Parse the timestamp string into a Date object
            const createdAt = new Date(payment.createdAt);

            // Format the date and time components
            const year = createdAt.getFullYear();
            const month = String(createdAt.getMonth() + 1).padStart(2, "0"); // Month is 0-based
            const day = String(createdAt.getDate()).padStart(2, "0");
            const hours = String(createdAt.getHours()).padStart(2, "0");
            const minutes = String(createdAt.getMinutes()).padStart(2, "0");
            const seconds = String(createdAt.getSeconds()).padStart(2, "0");

            // Create the formatted timestamp string
            const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

            return (
              <tr
                key={payment.payment_id}
                className="border-b hover:bg-gray-800"
              >
                <td className="px-6 py-3">{payment.payment_id}</td>
                <td className="px-6 py-3">{payment.user_id}</td>
                <td className="px-6 py-3">{payment.type}</td>
                <td className="px-6 py-3 text-center">{payment.amount}</td>
                <td className="px-6 py-3 text-center">
                  <Tag color={payment.is_banned ? "#f50" : "#87d068"}>
                    {payment.is_banned ? "Pending" : "Paid"}
                  </Tag>
                </td>
                <td className="px-6 py-3 text-center">{formattedTimestamp}</td>
                <td className="px-0 py-3">
                  <Link to={`./${payment.payment_id}`}>
                    <button className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-700">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;

// payment_id
// amount
// type
// user_id
// createdAt
// updatedAt
// payhere_id
// method
// status
// currency
