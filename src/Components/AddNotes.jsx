import React, { useState, useContext, useEffect } from 'react'
import '../App.css'
import { v4 as uuidv4 } from 'uuid';
import { IoIosArrowRoundBack } from "react-icons/io";
import { GrBold } from "react-icons/gr";
import { MdFormatItalic, MdMoreVert, MdContentCopy } from "react-icons/md";
import { BsTypeUnderline } from "react-icons/bs";
import ToDoContext from '../Contexts/ToDoContext';

function AddNotes({MyNote}) {
  const [inputTask, setInputTask] = useState('')
  const [isEditing, setIsEditing] = useState(false);
  const { setShowPopup, notesCollection, setNotesCollection, setShowNoteCard, DateNow, setDateNow, boldtext, setBoldtext, italicText, setItalicText, underlineText, setUnderlineText, setEditcurNote} = useContext(ToDoContext);
  
  useEffect(() => {
    if (MyNote) {
      setInputTask(MyNote.Note);
      setBoldtext(MyNote.bold);
      setItalicText(MyNote.italic);
      setUnderlineText(MyNote.underline);
      setIsEditing(true); // Set editing flag
    }
  }, [MyNote]); // Runs when `MyNote` changes
  
  useEffect(()=> {
    setDateNow(new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }))
  },[inputTask])

  return (
    <>
      <div
        className={`bg-white absolute top-[20vh] sm:left-[25vw] left-[5vw] sm:w-[50vw] sm:h-[60vh] w-[90vw] h-[70vh] rounded-xl px-2 pt-4 custom-shadow z-50
        ${(boldtext)? 'font-bold' : 'font-normal'}
        ${(italicText)? 'italic' : 'non-italic'}
        ${(underlineText)? 'underline' : 'non-underline'}`}
        >
          <form className='h-full flex flex-col gap-2'>
            <div className='p-1 flex gap-3 relative'>
              <IoIosArrowRoundBack
                className='bg-gray-200 hover:bg-gray-400 rounded inline'
                onClick = { () => {
                  setBoldtext(false);
                  setItalicText(false);
                  setUnderlineText(false)
                  
                  setShowPopup(false) 
                }
              }
              />
              <GrBold
                className='bg-gray-200 hover:bg-gray-400 rounded inline'
                onClick = { () => setBoldtext(!boldtext) }
              />
              <MdFormatItalic
                className='bg-gray-200 hover:bg-gray-400 rounded inline'
                onClick = { () => setItalicText(!italicText) }
              />
              <BsTypeUnderline
                className='bg-gray-200 hover:bg-gray-400 rounded inline'
                onClick = { () => setUnderlineText(!underlineText) }
              />
              <MdMoreVert
                className='bg-gray-200 hover:bg-gray-400 rounded inline absolute right-1'/>
            </div>
            <textarea
              className='bg-[white] border-2 border-[#C9C8C7] outline-[#949392] sm:w-[98%] w-[96%] h-[80%] rounded-xl sm:ml-[1%] ml-[2%] p-2 resize-none overflow-y-auto font-mono'
              style = {{ whiteSpace: 'pre-wrap' }}
              placeholder = 'Add Your task'
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value) }
            />
            <div className='relative'>
              <button
                className='w-[12%] bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200 absolute right-1'
                onClick={(e) => {
                  e.preventDefault();
                  if (!inputTask.trim()) {
                    setShowPopup(false);
                    return;
                  }
                  if (isEditing) {
                    // run When we edit a existing Node
                    const newNoteCollection = notesCollection.map((item) => {
                      if (item.id === MyNote.id) {
                        return { ...item, Notedate: DateNow, Note: inputTask, bold: boldtext, italic: italicText, underline: underlineText };
                      }
                      return item;
                    });
                    setNotesCollection(newNoteCollection);
                    setIsEditing(false); // Reset flag after update
                  } else {
                    setNotesCollection((prev) => [...prev, { id: uuidv4(), Notedate: DateNow, Note: inputTask, bold: boldtext, italic: italicText, underline: underlineText }]); // Runs when a new Node Added in Note collection
                  }
                  setShowNoteCard(true);
                  setBoldtext(false);
                  setItalicText(false);
                  setUnderlineText(false)
                  // Delay closing to allow state update to close AddNote
                  setTimeout(() => {
                    setEditcurNote('');
                    setShowPopup(false);
                  }, 100);
                }}
                >
                Save
                </button>
            </div>
          </form>
      </div>
    </>
  )
}

export default AddNotes ;