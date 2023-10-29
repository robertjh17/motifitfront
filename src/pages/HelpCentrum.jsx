import UserList from '../components/UserList';
import ChatComponent from '../components/ChatComponent';
import { useState } from 'react';

function HelpCentrum() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (userName) => {
        setSelectedUser(userName);
    }

    return (
        <div>
            <UserList onUserSelect={handleUserSelect} />
            {selectedUser && <ChatComponent selectedUsername={selectedUser} />}
        </div>
    )
}

export default HelpCentrum;