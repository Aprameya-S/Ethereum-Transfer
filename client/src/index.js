import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { TransactionsProvider } from './context/TransactionContext';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TransactionsProvider>
  
);


