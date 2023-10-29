import { useEffect, useState } from 'react';
import axios from 'axios';

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const authToken = localStorage.getItem('accessToken');
    const url = 'https://localhost:7150/api/';

    useEffect(() => {
        axios.get('https://localhost:7150/api/Admin/GetAllUsers', {
            headers: {
                'Authorization': "Bearer " + authToken,
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Fout bij het ophalen van gebruikers:', error);
            });
    }, []);

    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(url + 'Admin/DeleteUser', {
                headers: {
                    'Authorization': "Bearer " + authToken,
                    'Content-Type': 'application/json',
                },
                data: { UserId: userId }
            });
            setUsers(users.filter(user => user.id !== userId));
            setSuccessMessage('Gebruiker is succesvol verwijderd');
            console.log(response);
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Fout bij het verwijderen van de gebruiker:', error);
        }
    };

    return (
        <div className="p-4 relative">
            {successMessage && (
                <div className="bg-green-200 
                text-green-700
                p-2 mx-auto z-20
                opacity-100 w-100
                max-w-screen-sm
                text-center rounded-md
                transition-opacity
                duration-500">
                    {successMessage}
                </div>
            )}
            <h2 className="text-2xl font-bold mb-4">Beschikbare Gebruikers</h2>
            <table className="w-full border border-collapse">
                <thead>
                    <tr>
                        <th className="p-2">User ID</th>
                        <th className="p-2">Username</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Acties</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="p-2">{user.id}</td>
                            <td className="p-2">{user.userName}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                                >
                                    Verwijderen
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}

export default UserManagement;
