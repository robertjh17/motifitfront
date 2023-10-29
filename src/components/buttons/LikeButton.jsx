import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function LikeButton({ connector, postid }) {
    const { newMessage, events } = connector;
    const [likes, setLikes] = useState("0");
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        events((message, receivedPostId) => {
            if (receivedPostId === postid) {
                setLikes(message);
            }
        });
    }, [events, postid]);

    const handleClick = () => {
        if (liked) {
            const currentMessage = parseInt(likes, 10);
            const newMessageValue = currentMessage - 1;
            newMessage(newMessageValue.toString(), postid);
            setLiked(false);
        } else {
            const currentMessage = parseInt(likes, 10);
            const newMessageValue = currentMessage + 1;
            newMessage(newMessageValue.toString(), postid);
            setLiked(true);
        }
    };

    return (
        <div className="App">
            <button onClick={handleClick}>
                <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: liked ? 'green' : 'black' }}
                    className="text-2xl" 
                />
            </button>
            <span style={{ marginLeft: '5px' }}>{likes}</span>
        </div>
    );
}

export default LikeButton;
