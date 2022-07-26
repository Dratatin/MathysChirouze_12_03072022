import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import './style/main.css';
import Profil from './pages/Profil';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';


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