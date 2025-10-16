import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Noticias from './pages/Noticias';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';


function App() {
  return (
    <>
      {/* Barra de navegación */}
      <NavBar />
      {/* Rutas principales */}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
