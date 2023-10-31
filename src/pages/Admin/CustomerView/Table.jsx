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

  
};

export default CustomerTable;
