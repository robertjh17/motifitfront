import { useEffect, useState } from 'react';
import axios from 'axios';
import LikeButton from './buttons/LikeButton';

function PostItem({ connector }) {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://localhost:7150/api/Post/posts';
        const token = localStorage.getItem('accessToken');
        axios
            .get(url, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            })
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="flex items-center">
            <div className="w-1/2">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white p-4 m-4 border border-gray-200 rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User Profile"
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            <h2 className="text-lg font-semibold">{post.username}</h2>
                            <span className="ml-4 text-gray-600">
                                {formatDate(post.postedAt)} {/* Voeg hier de datum toe */}
                            </span>
                        </div>
                        <p className="text-xl font-semibold mb-3">{post.workoutNaam}</p>
                        <ul className="list-disc pl-8">
                            {post.setsReps &&
                                post.setsReps.map((setRep, setRepIndex) => (
                                    <li key={setRepIndex} className="text-gray-600 pb-2">
                                        <span className="font-semibold">
                                            {setRep.exerciseName}:
                                        </span>{' '}
                                        Sets: {setRep.sets}, Reps: {setRep.reps}
                                    </li>
                                ))}
                        </ul>
                        {index !== posts.length - 1 && (
                            <hr className="border-t border-gray-700 my-2" />
                        )}
                        <div className="mt-2">
                            <LikeButton connector={connector} postid={post.id} />
                        </div>
                        {post.beschrijving && (
                            <p className="text-gray-600 mt-2">
                                <span className="font-semibold">{post.username}:</span> {post.beschrijving}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostItem;
