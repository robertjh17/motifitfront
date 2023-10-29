import About from './pages/About';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import PostPage from './pages/PostPage';
import ChatComponent from './components/ChatComponent';
import HelpCentrum from './pages/HelpCentrum';
import DashBoard from './pages/DashBoard';


function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage/> } />
            <Route path="about" element={<About />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="posting" element={<PostPage />} /> 
            <Route path="dm" element={<ChatComponent />} />
            <Route path="helpcentrum" element={<HelpCentrum />} />
            <Route path="dashboard" element={<DashBoard/> }/>
        </Route>))
    return (
        <>
           
            <RouterProvider router={router} />
        </>
    );
}

export default App;