import { useState } from "react";
import { FaUser, FaEnvelope, FaBriefcase, FaEdit, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const initialUserProfile = {
  name: "John Doe",
  email: "john@example.com",
  role: "Admin",
  avatar: "https://via.placeholder.com/150",
  bio: "Passionate web developer with a love for crafting modern web applications. Always eager to learn new technologies and enhance user experiences.",
  location: "New York, USA",
  phone: "+1 234 567 890",
};

const UserProfile = () => {
  const [user, setUser] = useState(initialUserProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-white shadow-xl rounded-lg w-full max-w-full mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 text-gray-800">
      <div className="flex flex-col items-center w-full md:w-1/3">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
        />
        {!isEditing && (
          <button
            onClick={handleEditClick}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            <FaEdit className="inline-block mr-2" /> Edit Profile
          </button>
        )}
      </div>
      <div className="w-full md:w-2/3">
        {isEditing ? (
          <div className="text-black w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-3 rounded-lg border border-gray-300 mb-3"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-3 rounded-lg border border-gray-300 mb-3"
              placeholder="Email"
            />
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="block w-full p-3 rounded-lg border border-gray-300 mb-3"
              placeholder="Role"
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="block w-full p-3 rounded-lg border border-gray-300 mb-3"
              placeholder="Location"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full p-3 rounded-lg border border-gray-300 mb-3"
              placeholder="Phone Number"
            />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="block w-full p-3 rounded-lg border border-gray-300 mb-3"
              placeholder="Bio"
            />
            <button
              onClick={handleSave}
              className="mt-4 bg-green-500 text-white px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="text-lg">
            <p className="mb-2 flex items-center gap-2 font-semibold">
              <FaUser className="text-blue-500" /> {user.name}
            </p>
            <p className="mb-2 flex items-center gap-2">
              <FaEnvelope className="text-blue-500" /> {user.email}
            </p>
            <p className="mb-2 flex items-center gap-2">
              <FaBriefcase className="text-blue-500" /> {user.role}
            </p>
            <p className="mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> {user.location}
            </p>
            <p className="mb-2 flex items-center gap-2">
              <FaPhone className="text-blue-500" /> {user.phone}
            </p>
            <p className="mt-4 text-sm italic">{user.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
