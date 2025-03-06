import { useState } from 'react'
import './App.css'
import ToDoContextProvider from './Contexts/ToDoContextProvider';
import ToDoDashBoard from './Components/ToDoDashBoard';
import NavBar from './Components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <div className='w-full text-center flex justify-center'>
        <p className='sm:w-[60vw] w-[80vw] sm:m-15 m-10 md:text-5xl sm:text-4xl text-2xl font-medium font-ubuntu word-spacing-custom'>
          Capture your thoughts, organize with ease, and bring your ideas to life.
        </p>
      </div>
      <ToDoContextProvider>
        <ToDoDashBoard/>
      </ToDoContextProvider>
    </>
  );
}

export default App;