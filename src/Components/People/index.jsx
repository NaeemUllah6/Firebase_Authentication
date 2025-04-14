import { useState } from "react";
import { FaUser } from "react-icons/fa";

const peopleData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Editor" },
];

const People = () => {
  const [people, setPeople] = useState(peopleData);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FaUser className="text-blue-500" /> People
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 p-3 text-left">Name</th>
              <th className="border border-gray-200 p-3 text-left">Email</th>
              <th className="border border-gray-200 p-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 p-3">{person.name}</td>
                <td className="border border-gray-200 p-3">{person.email}</td>
                <td className="border border-gray-200 p-3">{person.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default People;
