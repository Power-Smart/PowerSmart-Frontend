const TableRow = ({ id, complaint, customer, assigned, status }) => {
  return (
    <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">{complaint}</td>
      <td className="px-6 py-4">{customer}</td>
      <td className="px-6 py-4">{assigned}</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-center">
          {status === "Pending" && (
            <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-yellow-950 text-yellow-500">
              {status}
            </span>
          )}
          {status === "Solved" && (
            <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
              {status}
            </span>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
        <button className="view__btn">View</button>
      </td>
    </tr>
  );
};

export default TableRow;
