import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Category from "./components/Category.jsx";
import Product from "./components/Product.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Category/>}/>
                <Route path='/product' element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
