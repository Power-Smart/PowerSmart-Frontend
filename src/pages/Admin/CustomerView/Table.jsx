import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getAllCustomersApi } from "../../../api/apiAdmin";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCustomersApi();
        setCustomers(response.data);
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
            <th scope="col" className="px-6 py-3 text-center"></th>
            <th scope="col" className="px-0 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Subscription
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Points
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.user_id} className="border-b hover:bg-gray-800">
              <td className="px-6 py-3">
                <div className="w-8 h-8 mx-auto">
                  <Avatar icon={<UserOutlined />} />
                </div>
              </td>
              <td className="px-0 py-3">{customer.user_id}</td>
              <td className="px-6 py-3">
                {`${customer.first_name} ${customer.last_name}`}
              </td>
              <td className="px-6 py-3">{customer.email}</td>
              <td className="px-6 py-3 text-center">
                {
                  new Date(customer.year_subscription)
                    .toISOString()
                    .split("T")[0]
                }
              </td>
              <td className="px-6 py-3 text-center">{customer.points}</td>
              <td className="px-6 py-3 text-center">
                <Tag color={customer.is_banned ? "#f50" : "#87d068"}>
                  {customer.is_banned ? "Banned" : "Active"}
                </Tag>
              </td>
              <td className="px-6 py-3">
                <Link to={`./${customer.user_id}`}>
                  <button className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-700">
                    View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
