import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Loading from '../loading';
import DeleteUser from '../DeleteUser';
import Toast from '../toast';

function Crud() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteUser, setDeleteUser] = useState(false);
  const [datasaved, setDataSaved] = useState(false);

  const originalUsers = useRef([]); // store unfiltered data

  const row = ['ID', 'Name', 'Phone', 'Address', 'City', 'Actions'];

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((res) => {
        originalUsers.current = res.data.users;
        setUsers(res.data.users);
        setFilteredUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const results = originalUsers.current.filter((user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(value) ||
      user.email?.toLowerCase().includes(value) ||
      user.phone?.toLowerCase().includes(value) ||
      user.address?.city?.toLowerCase().includes(value)
    );

    setFilteredUsers(results);
  };

  const handleDelete = () => {
    setDeleteUser(true);
  };

  const closeModal = () => {
    setDeleteUser(false);
  };

  const secondModal = () => {
    setDataSaved(true);
    closeModal();
  };

  return (
    <div>
      <h2 className="font-bold text-2xl my-5">Existing Users</h2>
      {loading && <Loading />}
      {deleteUser && <DeleteUser closeModal={closeModal} successfullyDeleted={secondModal} />}
      <input
        placeholder="Search User"
        className="border rounded py-2 px-2 mb-2 w-1/2 outline-0"
        onChange={handleSearch}
        type="text"
        value={search}
      />
      {datasaved && <Toast onClose={() => setDataSaved(false)} />}

      <div className="table-responsive w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border">
              {row.map((heading, index) => (
                <th key={index} className="text-start border px-5 py-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border">
                <td className="px-5 py-2 border whitespace-nowrap">{user.id}</td>
                <td className="px-5 py-2 border whitespace-nowrap">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-5 py-2 border whitespace-nowrap">{user.phone}</td>
                <td className="px-5 py-2 border whitespace-nowrap">
                  {user.address?.address} {user.address?.city}
                </td>
                <td className="px-5 py-2 border whitespace-nowrap">{user.address?.city}</td>
                <td className="px-5 py-2 border">
                  <button
                    onClick={handleDelete}
                    className="w-full px-3 py-2 bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && !loading && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
