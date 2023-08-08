const TableRow = ({ id, name, type, amount, timestamp }) => {
  return (
    <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{type}</td>
      <td className="px-6 py-4">{amount}</td>
      <td className="px-6 py-4">{timestamp}</td>
    </tr>
  );
};

export default TableRow;
