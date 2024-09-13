//update


import React, { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Pagination from "./Layout";

const Dashboard = ({ darkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);

  const referralData = [
    {
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      name: "Andria Chisnell",
      email: "achisnellq@imageshack.us",
      referredId: "3363",
      status: "Unpaid",
      value: "$9106.99",
      earnings: "$705.15",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      name: "Adriano Lygoe",
      email: "alygoe2m@gravatar.com",
      referredId: "5361",
      status: "Paid",
      value: "$6447.15",
      earnings: "$777.46",
    },
    // Other data
  ];

  const totalEntries = referralData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = referralData.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowSelect = (referredId) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(referredId)
        ? prevSelected.filter((id) => id !== referredId)
        : [...prevSelected, referredId]
    );
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(currentEntries.map((entry) => entry.referredId));
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div>
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatBox title="Total Earning" value="$24,983" icon="💰" darkMode={darkMode} />
        <StatBox title="Unpaid Earning" value="$8,647" icon="🎁" darkMode={darkMode} />
        <StatBox title="Signups" value="2,367" icon="👥" darkMode={darkMode} />
        <StatBox title="Conversion Rate" value="4.5%" icon="🔄" darkMode={darkMode} />
      </div>

      {/* How to use and Invite section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Box for How to Use */}
        <div className={`col-span-2 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg rounded-lg p-4`}>
          <h3 className="text-lg font-semibold mb-3">How to use</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
            <HowToStep title="Create & validate your referral link" reward="$50" icon="🚀" darkMode={darkMode} />
            <HowToStep title="For every new signup you get" reward="10%" icon="📈" darkMode={darkMode} />
            <HowToStep title="Get other friends to generate link" reward="$100" icon="✉️" darkMode={darkMode} />
          </div>
        </div>

{/* Box for Invite Friends - Styled for Mobile */}
<div className={`shadow-lg rounded-lg p-6 sm:col-span-1 ${darkMode ? "bg-gray-800" : "bg-white"} md:p-4`}>
  <h3 className="text-lg font-semibold mb-4">Invite your friends</h3>
  <h3 className={`text-sm ${darkMode ? "text-white" : "text-gray-800"}`}>Enter friend’s email address and invite them</h3>
  <div className="flex flex-col sm:flex-row sm:space-x-2 mb-4">
    <input
      type="email"
      className={`flex-1 border p-2 rounded-md ${
        darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"
      }`}
      placeholder="Email address"
    />
    <button className={`bg-purple-600 text-white py-2 px-4 rounded-md mt-2 sm:mt-0`}>
      <span className="whitespace-nowrap">Submit</span>
    </button>
  </div>
  <h3 className="text-lg font-semibold mb-4">Share the referral link</h3>
  <h3 className={`text-sm ${darkMode ? "text-white" : "text-gray-800"}`}>Share referral link in social media</h3>
  <div className="flex flex-col sm:flex-row sm:space-x-2 mb-4">
    <input
      type="text"
      className={`flex-1 border p-2 rounded-md ${
        darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"
      }`}
      placeholder="pixinvent.com/?ref=6479"
    />
    <div className="flex space-x-2 mt-2 sm:mt-0">
      <button className="bg-blue-600 text-white p-2 rounded-md flex items-center space-x-2">
        <FaFacebookF />
        <span>FB</span>
      </button>
      <button className="bg-blue-400 text-white p-2 rounded-md flex items-center space-x-2">
        <FaTwitter />
        <span>TW</span>
      </button>
    </div>
  </div>
</div>

      </div>

      {/* Referral Table */}
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg rounded-lg p-6 mt-12`}>
        <h3 className="text-lg font-semibold mb-4">Referred Users</h3>
        <div className="overflow-x-auto">  
        <table className="min-w-full table-auto">
          <thead>
            <tr className={`${darkMode ? "text-gray-400" : "text-gray-500"} uppercase text-sm`}>
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === currentEntries.length}
                />
              </th>
              <th className="px-4 py-2">Users</th>
              <th className="px-4 py-2">Referred ID</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Value</th>
              <th className="px-4 py-2">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((entry, index) => (
              <ReferralRow
                key={index}
                avatar={entry.avatar}
                name={entry.name}
                email={entry.email}
                referredId={entry.referredId}
                status={entry.status}
                value={entry.value}
                earnings={entry.earnings}
                darkMode={darkMode}
                isSelected={selectedRows.includes(entry.referredId)}
                onSelect={() => handleRowSelect(entry.referredId)}
              />
            ))}
          </tbody>
        </table>
      </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalEntries={totalEntries}
          entriesPerPage={entriesPerPage}
          onPageChange={handlePageChange}
        />

        {/* Export and Pagination buttons */}
        <div className="mt-4 flex justify-between">
          <select
            className={`${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"} border p-2 rounded-md`}
          >
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <button className="bg-gray-300 text-black p-2 rounded-md">Export</button>
        </div>
      </div>

      {/* Buy Now Button */}
      <div className="mt-4 flex justify-end">
        <button className="bg-red-500 text-white py-2 px-6 rounded-full shadow-lg">Buy Now</button>
      </div>

        {/* Navigation menu - hidden on mobile */}
        <div className="hidden sm:flex justify-end space-x-4 mt-4">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          License
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          More Themes
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Documentation
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Support
        </a>
      </div>
    </div>
  );
};

const StatBox = ({ title, value, icon, darkMode }) => {
  return (
    <div className={`shadow-lg rounded-lg p-6 flex items-center space-x-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

const HowToStep = ({ title, reward, icon, darkMode }) => {
  return (
    <div className="text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <h4 className="text-sm font-semibold mb-1">{title}</h4>
      <p className="text-purple-600">{reward}</p>
    </div>
  );
};

const ReferralRow = ({ avatar, name, email, referredId, status, value, earnings, darkMode, isSelected, onSelect }) => {
  return (
    <tr className={`${darkMode ? "text-white" : "text-black"}`}>
      <td className="border px-4 py-2">
        <input type="checkbox" checked={isSelected} onChange={onSelect} />
      </td>
      <td className="border px-4 py-2 flex items-center">
        <img src={avatar} alt={name} className="w-8 h-8 rounded-full mr-3" />
        <div>
          <p>{name}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </td>
      {/* Hide Referred ID in mobile view */}
      <td className="border px-4 py-2 hidden sm:table-cell">{referredId}</td>
      <td className="border px-4 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            status === "Paid"
              ? "bg-green-100 text-green-800"
              : status === "Unpaid"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      </td>
      {/* Hide Value in mobile view */}
      <td className="border px-4 py-2 hidden sm:table-cell">{value}</td>
      {/* Hide Earnings in mobile view */}
      <td className="border px-4 py-2 hidden sm:table-cell">{earnings}</td>
    </tr>
  );
};


export default Dashboard;
