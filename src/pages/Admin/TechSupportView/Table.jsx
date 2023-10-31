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

  
};

export default TechSupportTable;
