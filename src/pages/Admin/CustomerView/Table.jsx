import "./Table.css";
import TableRow from "./TableRow";
import { IoSearchCircle } from "react-icons/io5";

const dataset = [
  {
    id: "#413656",
    email: "neil.sims@flowbite.com",
    name: "John Doe",
    places: "4",
    status: "Active",
  },
  {
    id: "#413656",
    email: "neil.sims@flowbite.com",
    name: "Alice Smith",
    places: "6",
    status: "Disabled",
  },
  {
    id: "#413656",
    email: "neil.sims@flowbite.com",
    name: "Emily Brown",
    places: "4",
    status: "Active",
  },
  {
    id: "#413656",
    email: "neil.sims@flowbite.com",
    name: "Michael Davis",
    places: "3",
    status: "Pending",
  },
  {
    id: "#413656",
    email: "neil.sims@flowbite.com",
    name: "Oliver Thompson",
    places: "1",
    status: "Active",
  },
];

const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gradient-to-b dark:from-gray-950 dark:to-transparent py-12 px-8">
      <div className="search__filer_sort">
        <div className="search__filter">
          <div className="search__icon">
            <IoSearchCircle className="text-blue-600 w-8 h-8" />
          </div>
          <input
            type="text"
            placeholder="Search Customer Name"
            className="search__input"
          />
        </div>
        <div className="sort__filter">
          <div className="sort">
            <select name="sort" id="sort" className="sort__select">
              <option value="Sort By" hidden defaultChecked>
                Sort By
              </option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          <div className="filter">
            <select name="filter" id="filter" className="filter__select">
              <option value="Filter By" hidden defaultChecked>
                Filter By
              </option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Customer ID
            </th>
            <th scope="col" className="px-6 py-3">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3">
              Places
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataset.map((data) => (
            <TableRow {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
