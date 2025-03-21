import { useState } from "react";
import { FaUser, FaEnvelope, FaBriefcase, FaEdit, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Reports = () => {
  const [reports] = useState([
    { id: 1, title: "Monthly Users", value: "1,200" },
    { id: 2, title: "New Signups", value: "350" },
    { id: 3, title: "Active Users", value: "890" },
    { id: 4, title: "Support Tickets", value: "45" },
  ]);

  return (
    <div className="mt-10 p-6 bg-white shadow-lg rounded-lg w-full max-w-full mx-auto">
      <h2 className="text-xl font-bold mb-4">User Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map((report) => (
          <div key={report.id} className="p-4 border rounded-lg shadow-md bg-gray-100">
            <h3 className="text-lg font-semibold">{report.title}</h3>
            <p className="text-2xl font-bold text-blue-600">{report.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
