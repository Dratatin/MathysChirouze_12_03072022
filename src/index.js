import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
      {/* <div className="main">
      </div> */}
      <main>
        <Routes>
          <Route path="/" element={<Profil/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);