import React, { useEffect } from 'react';
import axios from 'axios';
import Loading from '../loading';
import DeleteUser from '../DeleteUser';
import Toast from '../toast';

function Crud() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [search, setSearch] = React.useState('');
    const [deleteUser, setDeleteUser] = React.useState(false);
    const [datasaved, setDataSaved] = React.useState(false)
    const row = [
        'ID',
        'Name',
        'Email',
        'Phone',
        'Address',
        'City',
        'Actions'
    ];

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then((response) => {
                setUsers(response.data.users);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);

        axios.get('https://dummyjson.com/users')
            .then((response) => {
                const filteredUsers = response.data.users.filter(user =>
                    user.firstName.toLowerCase().includes(searchTerm) ||
                    user.lastName.toLowerCase().includes(searchTerm) ||
                    user.email.toLowerCase().includes(searchTerm) ||
                    user.phone.toLowerCase().includes(searchTerm)
                    // user.city.toLowerCase().includes(searchTerm)
                );
                setUsers(filteredUsers);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    const handleDelete = () => {
        setDeleteUser(true)
        console.log('Delete user')
    }
    const closeModal = () => {
        setDeleteUser(false)
        console.log('butotnclosed')
    }
    const secondModal = () => {
        setDataSaved(true)
        closeModal()
    }

    return (
        <div>
            <h2 className='font-bold text-2xl my-5'>
                Existing Users
            </h2>
            {loading && <Loading />}
            {deleteUser && <DeleteUser closeModal={closeModal} successfullyDeleted={secondModal} />}
            <input
                placeholder='Search User'
                className='border rounded py-2 px-2 mb-2 w-1/2 outline-0'
                onChange={handleSearch}
                type="text"
                value={search}
            />
            {datasaved && <Toast  onClose={() => setDataSaved(false)}/>}
            <div className='table-responsive w-full !overflow-x-auto'>
                <table className='!overflow-x-auto w-full'>
                    <thead>
                        <tr className='border'>
                            {row.map((tableheading, index) => (
                                <th className='text-start border px-5 py-2' key={index}>{tableheading}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {users.map((user) => (
                            <tr className='border' key={user.id}>
                                <td className=' px-5 py-2 border whitespace-nowrap'>{user.id}</td>
                                <td className=' px-5 py-2 border whitespace-nowrap'>{user.firstName} {user.lastName}</td>
                                <td className=' px-5 py-2 border whitespace-nowrap'>{user.email}</td>
                                <td className=' px-5 py-2 border whitespace-nowrap'>{user.phone}</td>
                                <td className=' px-5 py-2 border whitespace-nowrap'>{user.address?.address} {user.address?.city}</td>
                                <td className=' px-5 py-2 border whitespace-nowrap'>{user.address?.city}</td>
                                <button onClick={handleDelete} className='w-full px-3 py-2 bg-red-600 text-white'>Delete</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Crud;
