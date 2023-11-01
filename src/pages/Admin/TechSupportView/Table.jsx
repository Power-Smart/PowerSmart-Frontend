import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Tag, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getAllTechSupportApi } from "../../../api/apiAdmin";

const TechSupportTable = () => {
  const [techSupport, setTechSupport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllTechSupportApi();
        setTechSupport(response.data);
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
              Tel No
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
            <th scope="col" className="pl-6 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {techSupport.map((techSupport) => (
            <tr
              key={techSupport.user_id}
              className="border-b hover:bg-gray-800"
            >
              <td className="px-6 py-3">
                <div className="w-8 h-8 mx-auto">
                  <Avatar icon={<UserOutlined />} />
                </div>
              </td>
              <td className="px-0 py-3">{techSupport.user_id}</td>
              <td className="px-6 py-3">
                {`${techSupport.first_name} ${techSupport.last_name}`}
              </td>
              <td className="px-6 py-3">{techSupport.email}</td>
              <td className="px-6 py-3 text-center">
                {techSupport.tel_no.map((tel, index) => (
                  <div key={index}>{tel}</div>
                ))}
              </td>
              <td className="px-6 py-3 text-center">
                <Tag color={techSupport.is_banned ? "#f50" : "#87d068"}>
                  {techSupport.is_banned ? "Banned" : "Active"}
                </Tag>
              </td>
              <td className="pl-6 py-3">
                <Space>
                  <Link to={`./${techSupport.user_id}`}>
                    <button className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-700">
                      View
                    </button>
                  </Link>
                  <button className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-700">
                    Update
                  </button>
                </Space>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechSupportTable;
