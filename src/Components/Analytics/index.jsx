import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const trafficData = [
  { name: "Organic", value: 450 },
  { name: "Direct", value: 320 },
  { name: "Referral", value: 260 },
  { name: "Social", value: 180 },
];

const COLORS = ["#6366F1", "#F59E0B", "#10B981", "#EF4444"];

const userGrowthData = [
  { name: "Jan", users: 180 },
  { name: "Feb", users: 380 },
  { name: "Mar", users: 580 },
  { name: "Apr", users: 760 },
  { name: "May", users: 1100 },
  { name: "Jun", users: 1450 },
];

const stats = [
  { title: "Total Visitors", value: "24.6K", color: "bg-indigo-500", icon: "👥" },
  { title: "Bounce Rate", value: "38%", color: "bg-yellow-500", icon: "📉" },
  { title: "Conversion Rate", value: "9.2%", color: "bg-green-500", icon: "⚡" },
  { title: "Avg. Session Time", value: "3m 45s", color: "bg-red-500", icon: "⏳" },
];

const Analytics = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Grid Layout for Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Growth Line Chart (Wider) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#6366F1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Traffic Source Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Traffic Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={trafficData} dataKey="value" outerRadius={120} label>
                {trafficData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
