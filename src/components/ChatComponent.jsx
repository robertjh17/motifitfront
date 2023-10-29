import { useEffect, useState } from 'react';
//import Connector from './SignalrConnector'
import { useAuth } from '../context/AuthContext';

function ChatComponent() {
    const connector = Connector(); // Roep de Connector-functie aan om een instantie te krijgen
    const { newMessage, events } = connector;
    const [inputValue, setInputValue] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const { userName } = useAuth();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    connector.setUsername(userName);

    const handleSendMessage = () => {
        connector.newMessage(inputValue);
        setInputValue(""); // Clear input value after sending message
    }

    useEffect(() => {
        events((username, message) => { // Update chat history with username and message
            setChatHistory([...chatHistory, { message: message, username: username }]);
        });
    }, [chatHistory]); // Add chatHistory as a dependency to useEffect

    return (
        <div className="App">
            <div style={{ height: "200px", overflowY: "scroll" }}>
                {chatHistory.map((chat, index) => (
                    <div key={index}>
                        <span>{chat.username}: </span>
                        <span>{chat.message}</span>
                    </div>
                ))}
            </div>
            <br />
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSendMessage}>send message</button>
        </div>
    )
}

export default ChatComponent;
