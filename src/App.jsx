import { useState } from 'react'
import './App.css'
import ToDoContextProvider from './Contexts/ToDoContextProvider';
import { Outlet } from 'react-router'
import MyNotes from './Components/MyNotes';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';

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