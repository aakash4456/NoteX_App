import React from 'react'
import { useContext } from 'react';
import ToDoContext from '../Contexts/ToDoContext';
import AddNotes from './AddNotes';
import Notecard from './Notecard';


function ToDoDashBoard() {
  const { showPopup, setShowPopup, showNoteCard, editcurNote} = useContext(ToDoContext);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        {/* Button to open the popup */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setShowPopup(true)}
        >
        Open Add Notes
        </button>
      </div>
      {/* Show popup if showPopup is true */}
      {showPopup && <div className="overlay"></div>}
      {showPopup && (
        <div>
          {/* AddNotes Component */}
          <AddNotes MyNote={editcurNote}/>
        </div>
      )}
      {showNoteCard && (
        <div>
          <Notecard />
        </div>
      )}
    </>
  )
}

export default ToDoDashBoard ;