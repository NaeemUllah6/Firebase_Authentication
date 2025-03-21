import React from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";

const transactions = [
  { id: "#001", name: "Spotify Subscription", amount: "-$9.99", date: "Mar 10, 2025", status: "Completed" },
  { id: "#002", name: "Amazon Purchase", amount: "-$49.99", date: "Mar 12, 2025", status: "Pending" },
  { id: "#003", name: "Freelance Payment", amount: "+$500.00", date: "Mar 15, 2025", status: "Completed" },
  { id: "#004", name: "Netflix Subscription", amount: "-$15.99", date: "Mar 18, 2025", status: "Completed" },
  { id: "#005", name: "Apple Music", amount: "-$9.99", date: "Mar 20, 2025", status: "Pending" },
];

const billingStats = [
  { title: "Total Balance", value: "$12,350.75", color: "bg-green-500", icon: "💰" },
  { title: "Expenses This Month", value: "$1,250.80", color: "bg-red-500", icon: "📉" },
  { title: "Pending Invoices", value: "2", color: "bg-yellow-500", icon: "📝" },
  { title: "Last Payment", value: "$500.00", color: "bg-blue-500", icon: "✅" },
];

const expenseData = [
  { month: "Jan", expense: 900 },
  { month: "Feb", expense: 1200 },
  { month: "Mar", expense: 750 },
  { month: "Apr", expense: 1450 },
  { month: "May", expense: 1600 },
  { month: "Jun", expense: 1350 },
];

const Billing = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Billing Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {billingStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className={`p-5 rounded-lg text-white ${stat.color} flex items-center justify-between shadow-md`}
          >
            <div>
              <p className="text-lg font-semibold">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
            <span className="text-4xl">{stat.icon}</span>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expense Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={expenseData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="expense" stroke="#F59E0B" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Transaction History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {transactions.map((txn) => (
              <div
                key={txn.id}
                className="flex justify-between items-center p-3 border-b last:border-0 hover:bg-gray-100 transition rounded-md"
              >
                <div>
                  <p className="text-sm font-semibold">{txn.name}</p>
                  <p className="text-xs text-gray-500">{txn.date}</p>
                </div>
                <p
                  className={`text-sm font-bold ${
                    txn.amount.startsWith("+") ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {txn.amount}
                </p>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    txn.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {txn.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Billing;
