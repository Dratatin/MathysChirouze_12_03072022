import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import './style/main.css';
import Profil from './components/profil';
import Header from './components/header';
import Sidebar from './components/sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/profil/12" />}/>
          <Route path="/profil/:userId" element={<Profil />}/>
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);