import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiTruck, FiCheckCircle, FiShoppingCart, FiClock, FiDownload } from "react-icons/fi";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setOrders([
        { id: "ORD-1001", date: "2025-03-12", amount: "$250.00", status: "Pending" },
        { id: "ORD-1002", amount: "$120.50", date: "2025-03-05", status: "Shipped" },
        { id: "ORD-1003", amount: "$75.00", date: "2025-03-08", status: "Delivered" },
        { id: "ORD-1005", amount: "$330.20", date: "2025-02-28", status: "Processing" },
      ]);
    }, 1000);
  }, []);

  const filteredOrders = orders.filter((order) => {
    return (
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.amount.toLowerCase().includes(search.toLowerCase()) ||
      order.date.toLowerCase().includes(search.toLowerCase()) ||
      order.status.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      {/* Order Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Total Orders", count: 150, icon: <FiShoppingCart />, color: "bg-blue-500" },
          { title: "Pending", count: 12, icon: <FiClock />, color: "bg-yellow-500" },
          { title: "Shipped", count: 98, icon: <FiTruck />, color: "bg-green-500" },
          { title: "Completed", count: 40, icon: <FiCheckCircle />, color: "bg-purple-500" },
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg text-white shadow-md flex items-center space-x-4 ${card.color}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-3xl">{card.icon}</div>
            <div>
              <p className="text-lg">{card.title}</p>
              <p className="text-2xl font-bold">{card.count}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <motion.div
        className="bg-white p-6 mt-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <input
          className="border rounded py-2 px-2 mb-2 w-1/2 outline-0"
          type="text"
          placeholder="Search Order"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => (
                  <tr key={index} className="border-t hover:bg-gray-100 transition">
                    <td className="py-3 px-4">{order.id}</td>
                    <td className="py-3 px-4">{order.amount}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td
                      className={`py-3 px-4 text-sm ${order.status === "Pending"
                          ? "text-yellow-600"
                          : order.status === "Shipped"
                            ? "text-blue-500"
                            : order.status === "Delivered" || order.status === "Completed"
                              ? "text-green-500"
                              : "text-purple-500"
                        }`}
                    >
                      {order.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-3 px-4 text-center" colSpan="4">
                    Sorry, nothing found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Download Order Button */}
      <motion.div
        className="mt-6 flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8 } }}
      >
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-500 transition">
          <FiDownload className="mr-2" />
          Download Report
        </button>
      </motion.div>
    </div>
  );
};

export default Order;
