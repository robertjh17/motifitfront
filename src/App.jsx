import React from 'react';
import About from './pages/About';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
        </Route>))
    return (
        <>
           
            <RouterProvider router={router} />
        </>
    );
}

export default App;