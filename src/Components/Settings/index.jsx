import React, { useState } from "react";

const UserProfile = () => {
  // State for profile data
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Web Developer at XYZ",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Toggle Edit Mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="max-w-full mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>

      {isEditing ? (
        // Edit Mode
        <>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            required
            value={profile.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <label className="block mt-3 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <label className="block mt-3 mb-2">Bio:</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          ></textarea>

          <button
            onClick={toggleEdit}
            type='submit'
            className="mt-4 w-fit px-5 bg-green-600 text-white py-2 rounded"
          >
            Save Changes
          </button>
        </>
      ) : (
        // View Mode
        <>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>

          <button
            onClick={toggleEdit}
            className="mt-4 w-fit px-5 bg-blue-600 text-white py-2 rounded"
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
