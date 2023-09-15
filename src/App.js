import React from 'react';
import About from './pages/About'; 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/CustomBootstrap.css'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path="about" element={<About />} />
</Route>))

function App() {
    return (
        <>
            <RouterProvider router={router} />           
        </>
    );
}

export default App;