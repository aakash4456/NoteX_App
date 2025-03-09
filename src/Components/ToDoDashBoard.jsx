import React from 'react'
import { useContext } from 'react';
import ToDoContext from '../Contexts/ToDoContext';
import AddNotes from './AddNotes';
import Notecard from './Notecard';


function ToDoDashBoard() {
  const { showCreatingNote, setShowCreatingNote, showNoteCard, editcurNote} = useContext(ToDoContext);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setShowCreatingNote(true)}
        >
        Open Add Notes
        </button>
      </div>
      {/* Show CreatingNote if showCreatingNote is true */}
      {showCreatingNote && <div className="overlay"></div>}
      {showCreatingNote && (
        <div>
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