import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tag } from "antd";
import { getAllComplaintsApi } from "../../../api/apiAdmin";

const ComplaintsTable = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllComplaintsApi();
        setComplaints(response.data);
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
            <th scope="col" className="px-2 py-3">
              Complaint Id
            </th>
            <th scope="col" className="px-0 py-3">
              Customer Id
            </th>
            <th scope="col" className="px-0 py-3">
              Tech Support Id
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Timestamp
            </th>
            <th scope="col" className="px-2 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => {
            // Parse the timestamp string into a Date object
            const createdAt = new Date(complaint.createdAt);

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
                key={complaint.complaint_id}
                className="border-b hover:bg-gray-800"
              >
                <td className="px-6 py-3">{complaint.complaint_id}</td>
                <td className="px-6 py-3">{complaint.customer_id}</td>
                <td className="px-6 py-3">
                  {complaint.assign_tech_support_id}
                </td>
                <td className="px-6 py-3 text-left">
                  {complaint.description.length > 100
                    ? `${complaint.description.slice(0, 180)}...`
                    : complaint.description}
                </td>
                <td className="px-6 py-3 text-center">
                  <Tag color={complaint.is_solve ? "#87d068" : "#f50"}>
                    {complaint.is_solve ? "Solved" : "Pending"}
                  </Tag>
                </td>
                <td className="px-6 py-3 text-center">{formattedTimestamp}</td>
                <td className="px-2 py-3">
                  <Link to={`./${complaint.complaint_id}`}>
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

export default ComplaintsTable;

// complaint_id
// customer_id
// assign_tech_support_id
// description
// date
// is_solve
// comment
// createdAt
// updatedAt
// user_id
// tech_support_id
