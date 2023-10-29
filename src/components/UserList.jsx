import React, { useEffect, useState } from 'react';
import Connector from './SignalrConnector';
import axios from 'axios';

function UserList({ onUserSelect }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Initialize and start the HubConnection within the useEffect
        connection.start().then(() => {
            events((_, message) => setMessage(message));
        }).catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get('https://localhost:7150/api/User/GetAllUsers')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Fout bij het ophalen van gebruikers:', error);
            });
    }, []);

    return (
        <div>
            <h2>Beschikbare Gebruikers</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <button onClick={() => onUserSelect(user.userName)}>{user.userName}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;