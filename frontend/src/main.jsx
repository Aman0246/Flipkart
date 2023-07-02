import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { store } from './Redux/Store.js';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(


<BrowserRouter>
    <Provider store={store}>
    <App />
    <Toaster />
    </Provider>
</BrowserRouter>

)