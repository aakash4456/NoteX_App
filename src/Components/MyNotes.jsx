import React from 'react'
import { useContext } from 'react';
import ToDoContext from '../Contexts/ToDoContext';
import { LuFolderPen } from "react-icons/lu";
import AddNotes from './AddNotes';
import Notecard from './Notecard';


function MyNotes() {
  const {
    notesCollection,
    showCreatingNote, setShowCreatingNote,
    editcurNote,
    setShowLabelOptions,
    setShowEachNoteoptions,
    setShowEachLabelOptions
    } = useContext(ToDoContext);

  const openAddNote = () => {
    setShowEachNoteoptions((prevOptions) =>
      prevOptions.map((item, i) => ( { ...item, optionstate: false } ) )
    );
    setShowEachLabelOptions((prevOptions) =>
      prevOptions.map((item, i) => ( { ...item, Labeloptionstate: false } ) ) 
    );
    setShowLabelOptions(false);
    setShowCreatingNote(true);
  }

  return (
    <>
      <div className="border-0 w-full flex flex-col justify-center items-center mt-10 gap-15">
        <button
          // className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          className="bg-gray-200 text-black px-5 py-2 rounded-xl shadow-md 
            hover:scale-103 transition duration-300 
            cursor-pointer
            border-t-2 border-t-red-700
            border-l-2 border-l-red-700
            border-r-2 border-r-blue-950
            border-b-2 border-b-blue-950
            "
          onClick={openAddNote}
        >
        Add Notes
        </button>
        {notesCollection.length === 0 && (
          <div
            className='sm:h-[40vh] h-[35vh] sm:w-[390px] w-[250px] flex justify-center items-center rounded-2xl hover:scale-101 transition-all duration-300 shadow-lg shadow-gray-300 border border-transparent border-t-8 border-t-red-700 hover:border-2 hover:border-gray-500 text-8xl bg-blue-950 text-white cursor-pointer'
            onClick={openAddNote}
          >
            <LuFolderPen />
          </div>
        )}
      </div>
      {/* Show CreatingNote if showCreatingNote is true */}
      {showCreatingNote && <div className="overlay"></div>}
      {showCreatingNote && (
        <AddNotes MyNote={editcurNote}/>
      )}
      {notesCollection.length > 0 && (
        <Notecard />
      )}
    </>
  )
}

export default MyNotes ;