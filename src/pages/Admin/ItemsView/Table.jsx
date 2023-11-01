import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Space } from "antd";
import { getAllItemsApi } from "../../../api/apiAdmin";

const ItemsTable = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllItemsApi();
        setItems(response.data);
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
              Code
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Quantity
            </th>
            <th scope="col" className="pl-6 pr-0 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.item_id} className="border-b hover:bg-gray-800">
              <td className="px-6 py-3">
                <div className="w-8 h-8 mx-auto">
                  <Image
                    width={35}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
              </td>
              <td className="px-0 py-3">{item.item_id}</td>
              <td className="px-6 py-3">{item.item_code}</td>
              <td className="px-6 py-3">{item.name}</td>
              <td className="px-6 py-3 text-center">{item.price}</td>
              <td className="px-6 py-3 text-center">{item.quantity}</td>
              <td className="pl-6 py-3">
                <Space>
                  <Link to={`./${item.item_id}`}>
                    <button className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-700">
                      View
                    </button>
                  </Link>
                  <button className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-700">
                    Update
                  </button>
                  <button className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-700">
                    Delete
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

export default ItemsTable;

// item_id
// name
// price
// description
// quantity
// item_img
// user_id
// createdAt
