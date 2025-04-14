import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const transactions = [
  { id: "INV-001",name: "INV-001", date: "Mar 10, 2025", amount: "$250.00", status: "Paid" },
  { id: "INV102",name: "INV102", amount: "-$100.00", date: "Mar 12, 2025", status: "Paid" },
  { id: "INV-4576",name: "INV-4576", amount: "$75.50", date: "Mar 20, 2025", status: "Pending" },
  { id: "INV-4789",name: "INV-4789", amount: "-$40.00", date: "Mar 25, 2025", status: "Failed" },
];

const chartData = [
  { month: "Jan", revenue: 1200, expenses: 900 },
  { month: "Feb", revenue: 1800, expenses: 1200 },
  { month: "Mar", revenue: 2500, expenses: 1600 },
  { month: "Apr", revenue: 2000, expense: 1450 },
  { month: "May", revenue: 3000, expense: 2000 },
];

const Invoice = () => {
  const [currentMonth, setCurrentMonth] = useState("");


  return (
    <div className="">
      {/* Invoice Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { title: "Total Revenue", amount: "$50,000", color: "bg-blue-500", icon: "💵" },
          { title: "Pending Invoices", value: "5", color: "bg-orange-400", icon: "📄" },
          { title: "Overdue Payments", value: "3", color: "bg-red-500", icon: "⚠️" },
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl ${card.color} text-white shadow-lg flex items-center justify-between`}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <p className="text-xl font-semibold">{card.title}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
            <span className="text-4xl">{card.icon}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Invoice Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg p-6 mt-6 rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Revenue vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#4CAF50" />
            <Bar dataKey="expenses" fill="#F44336" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Transactions Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-left border rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-4 text-left">Invoice #</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
                <th className="py-2 text-left">Status</th>
              </tr>
              </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4">{tx.name}</td>
                  <td className="text-red-500">{tx.amount}</td>
                  <td className="text-gray-500">{tx.date}</td>
                  <td
                    className={`text-left ${
                      tx.status === "Completed" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {tx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      </motion.div>
    </div>
  );
};

export default Invoice;
