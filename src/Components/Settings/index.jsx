import React, { useState } from "react";
import {ProfileContext} from '../../UserAuthentication/UserContext/User-context'
import { useContext } from "react";
const UseruserProfile = () => {
  // State for userProfile data
  const [userProfile, setuserProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Web Developer at XYZ",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setuserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  // Toggle Edit Mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
    const {profile} = useContext(ProfileContext);

  return (
    <div className="max-w-full mx-auto mt-10 p-4  bg-white shadow-md rounded-lg">
      <img className="mb-3 rounded-2xl" src={profile} alt="" />
      <h2 className="text-xl font-bold mb-4">User userProfile</h2>

      {isEditing ? (
        // Edit Mode
        <>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            required
            value={userProfile.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <label className="block mt-3 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={userProfile.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <label className="block mt-3 mb-2">Bio:</label>
          <textarea
            name="bio"
            value={userProfile.bio}
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
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Bio:</strong> {userProfile.bio}</p>

          <button
            onClick={toggleEdit}
            className="mt-4 w-fit px-5 bg-blue-600 text-white py-2 rounded"
          >
            Edit userProfile
          </button>
        </>
      )}
    </div>
  );
};

export default UseruserProfile;
