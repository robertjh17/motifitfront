import PostForm from '../components/PostForm';
import { useAuth } from '../context/AuthContext'; 

function PostPage() {

    return (
        <div>
            <PostForm />
        </div>
        
    )
}

export default PostPage;