import React, { useContext, useEffect, useRef } from 'react'
import '../App.css'

import ToDoContext from '../Contexts/ToDoContext';
import { MdDeleteOutline, MdContentCopy } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Notecard() {
  const { notesCollection, setNotesCollection, setShowCreatingNote, setEditcurNote } = useContext(ToDoContext);
  const copyRef = useRef([]);

  // creating reference for each Note in NotesCollection so that at time time of editing Note we can use particular Note's reference. 
  useEffect(()=> {
    copyRef.current = notesCollection.map((_, i) => copyRef.current[i] || React.createRef())
  }, [notesCollection]);
  
  // function for copy a Note value
  const copyNote = (curtNote, index) => {
    const selectText = copyRef.current[index]?.current;
    if(selectText){
      selectText.select();
      window.navigator.clipboard.writeText(curtNote.Note);
    }
  }

  // function for editing a Note
  const EditNote = (curtNote) => {
    setEditcurNote(curtNote);
    setShowCreatingNote(true);
  };

  // function for deleting a Note
  const DeleteNote = (curtNote) => {
    const newNoteCollection = notesCollection.filter((item) => (item !== curtNote ));
    setNotesCollection(newNoteCollection);
  };

  return (
    <>
      <ul className=' w-full sm:mt-15 mt-10 sm:mb-15 mb-10 flex flex-wrap justify-center sm:gap-12 gap-6 p-2'>
        {
          notesCollection.map((currentNote, index) => {
            return <div 
                    className={`bg-[#F2EFF2] border-2 sm:min-w-[270px] w-[160px] 
                      sm:h-[240px] h-[30vh] flex flex-col justify-between 
                      p-1 rounded-2xl hover:rounded NoteCard-shadow hover:scale-102 z-0`}
                    style={{ borderColor: currentNote.MyColor }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'red'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = currentNote.MyColor}
                    key = { index }
                    id = { currentNote.id }
                    >
                      <div className = 'flex justify-between text-[12px] text-[#245F73] opacity-70'>
                        <p className = 'inline'>{currentNote.Notedate}</p>
                        <p className = 'inline'>{currentNote.MyLabel}</p>
                      </div>
                      <textarea
                        className = {`bg-white border-2 outline-none border-[#C9C8C7] w-[100%] h-[78%] rounded resize-none overflow-y-hidden p-1 cursor-pointer 
                        ${(currentNote.bold)? 'font-bold' : 'font-normal'}
                        ${(currentNote.italic)? 'italic' : 'non-italic'}
                        ${(currentNote.underline)? 'underline' : 'non-underline'}`}
                        placeholder = 'Note 1'
                        readOnly
                        ref = { copyRef.current[index] }
                        value = { currentNote.Note }
                      />
                      <div className = 'text-[18px]  text-[#245F73] pb-1 pr-0.5 flex justify-end gap-3 '>
                        <button
                          className = 'hover:bg-[#C9C8C7] transition duration-300 rounded'
                          onClick = { () => EditNote(currentNote) }
                        >
                          <FiEdit />
                        </button>
                        <button
                          className = 'hover:bg-[#C9C8C7] transition duration-300 rounded'
                          onClick = { () => copyNote(currentNote, index) }
                        >
                          <MdContentCopy />
                        </button>
                        <button
                          className = 'hover:bg-[#C9C8C7] transition duration-300 rounded'
                          onClick = { () => DeleteNote(currentNote) }
                        >
                          <MdDeleteOutline/>
                        </button>
                      </div>
                    </div>
          })
        }
      </ul>
    </>
  )
}

export default Notecard ;