// import profilePic from '../../../assets/images/profile.jpeg'

const TableRow = ({ profilePic, id, email, name, status }) => {
  return (
    <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" /> */}
        <div className="pl-3">
          <div className="text-base font-semibold">{id}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-center">
          {status === "Pending" && (
            <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-yellow-950 text-yellow-500">
              {status}
            </span>
          )}
          {status === "Active" && (
            <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-green-950 text-green-500">
              {status}
            </span>
          )}
          {status === "Disabled" && (
            <span className="px-2 py-1 inline-flex text-xs leading-5 rounded-full bg-red-950 text-red-500">
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
