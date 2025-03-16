import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Outlet className="flex-grow"/>
        <Footer />
      </div>
    </>
  );
}

export default App;