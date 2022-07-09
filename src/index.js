import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import { SearchContextProvider } from './store/search_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SearchContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SearchContextProvider>
);
