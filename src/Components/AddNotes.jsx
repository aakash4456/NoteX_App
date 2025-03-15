import React, { useState, useContext, useEffect } from 'react'
import '../App.css'
import { v4 as uuidv4 } from 'uuid';
import { IoIosArrowRoundBack } from "react-icons/io";
import { GrBold } from "react-icons/gr";
import { MdFormatItalic, MdMoreVert } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BsTypeUnderline } from "react-icons/bs";
import ToDoContext from '../Contexts/ToDoContext';
import NoteFeatures from './NoteFeatures';

function AddNotes({MyNote}) {
  const [inputTask, setInputTask] = useState('');   // set Note value for each created/updated note
  const [isEditing, setIsEditing] = useState(false);
  const [showNoteoptions, setShowNoteoptions] = useState(false);    // show options like Add Label, Copy Note etc.
  
  const { 
    setShowCreatingNote,
    notesCollection, setNotesCollection,
    DateNow, setDateNow,
    boldtext, setBoldtext,
    italicText, setItalicText,
    underlineText, setUnderlineText,
    setEditcurNote,
    noteLabel, setNoteLabel,
    noteColor, setNoteColor,
    labelCollection, setLabelCollection,
    showLabelOptions, setShowLabelOptions, // at the time of creating/ updating a note.
    checkedRef,
    inputLabelRef
    } = useContext(ToDoContext);
  
  // function for checking that only one label at a time should be checked and assign label value to it's corresponding Note
  const checkLabel = (curLabel, index) => {
    checkedRef.current.map((ref, i) => {
      if (ref.current && i === index) {
        if(ref.current.checked === false){
          ref.current.checked = false
          inputLabelRef.current.disabled = false;
          setNoteLabel('');
          setNoteColor('#172554');
        } else {
          ref.current.checked = true
          // setNoteLabel(ref.current.value);             ref.current.value ==== curLabel.LabelName as in line 239 value = curLabel.LabelName.
          setNoteLabel(curLabel.LabelName);
          setNoteColor(curLabel.LabelColor);
          // when a checkbox is checked then input label will be empty.
          // inputLabelRef.current.value = "";
          inputLabelRef.current.disabled = true;
        }
      } else {
        ref.current.checked = false;
      }
    });
  }
  
  // function to update existing labels' labelColor property dynamicaly in real time
  const handleColorChange = (index, newColor) => {
    setLabelCollection(prevLabels =>
      prevLabels.map((curlabel, i) =>
        i === index ? { ...curlabel, LabelColor: newColor } : curlabel
      )
    );
  };
  
  // this will set noteColor value again blue-950 if it is enter Mylabel value is empty.
  useEffect(() => {
    if (noteLabel.trim() === '') {
      setNoteColor('#172554');
    }
  }, [noteLabel]);
  
  // runs when user try to update a existing Note.
  useEffect(() => {
    if (MyNote) {
      setInputTask(MyNote.Note);
      setBoldtext(MyNote.bold);
      setItalicText(MyNote.italic);
      setUnderlineText(MyNote.underline);
      setNoteLabel(( MyNote.MyLabel !== "Default" ? MyNote.MyLabel: '' ));
      setNoteColor( (MyNote.MyColor !== '#172554' ? MyNote.MyColor: '#172554') )
      setIsEditing(true);
    }
  }, [MyNote]); // Runs when `MyNote` changes
  
  // function to click back button
  const backButtonClicked = () => {
    setBoldtext(false);
    setItalicText(false);
    setUnderlineText(false);
    setNoteLabel('');
    setShowLabelOptions(false);
    setEditcurNote('');
    setShowCreatingNote(false);
  }
  
  // set Date Variable for current Note.
  useEffect(()=> {
    setDateNow(new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }))
  },[inputTask]);
  
  // function to click SAVE Button
  const saveNoteButton = (e) => {
    e.preventDefault();
    if (!inputTask.trim()) {
      setBoldtext(false);
      setItalicText(false);
      setUnderlineText(false);
      setNoteLabel('');
      setNoteColor('#172554');
      setShowLabelOptions(false);
      setShowCreatingNote(false);
      return;
    }
    if ( isEditing ) {
      // run When user edit a existing Node
      const newNoteCollection = notesCollection.map((item) => {
        if (item.id === MyNote.id) {
          return { ...item, 
                      Notedate: DateNow,
                      Note: inputTask,
                      bold: boldtext,
                      italic: italicText,
                      underline: underlineText,
                      MyLabel: (!noteLabel)? "Default" : noteLabel,
                      MyColor: (noteColor === '#172554') ? "#172554" : noteColor
                  };
        }
        return item;
      });
      setNotesCollection(newNoteCollection);
      setIsEditing(false); // Reset flag after update.
    } 
    else {
      setNotesCollection((prev) => [...prev,
                                      { id: uuidv4(),
                                        Notedate: DateNow,
                                        Note: inputTask,
                                        bold: boldtext,
                                        italic: italicText,
                                        underline: underlineText,
                                        MyLabel: (!noteLabel)? "Default" : noteLabel,
                                        MyColor: (noteColor === '#172554') ? "#172554" : noteColor
                                      }
                                    ] ); // Runs when a new Node Added in Note collection
    }
    
    setLabelCollection((prev) => (
      noteLabel && !prev.some((item) => item.LabelName === noteLabel)
        ? [...prev, { LabelName: noteLabel, LabelColor: noteColor }]
        : prev
    ));
    
    setBoldtext(false);
    setItalicText(false);
    setUnderlineText(false)
    setNoteLabel('');
    setNoteColor('#172554')
    setShowLabelOptions(false);
    // Delay closing to allow state update to close AddNote
    setTimeout(() => {
      setEditcurNote('');
      setShowCreatingNote(false);
    }, 100);
  }

  return (
    <>
      <div
        className={`bg-white
        absolute top-[20vh] sm:left-[25vw] left-[5vw]
        sm:w-[50vw] sm:h-[60vh]
        w-[90vw] h-[70vh]
        rounded-xl px-2 pt-4 custom-shadow z-50
        ${(boldtext)? 'font-bold' : 'font-normal'}
        ${(italicText)? 'italic' : 'non-italic'}
        ${(underlineText)? 'underline' : 'non-underline'}`}
        >
          <form className='h-full flex flex-col gap-2 relative'
            onClick={() => {
              if(showNoteoptions === true) setShowNoteoptions(false);
            }}
          >
            <div className='p-1 flex gap-3 relative '>
              <IoIosArrowRoundBack
                className='bg-gray-200 hover:bg-gray-400 rounded inline'
                onClick = { backButtonClicked }
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
              <div className='absolute right-1 flex justify-center items-center'>
                <MdMoreVert
                  className={`absolute bg-gray-200 hover:bg-gray-400 rounded transition-all duration-300 ease-in-out transform
                    ${ showNoteoptions ? "opacity-0 scale-0" : "opacity-100 scale-100" } `}
                  onClick = { () => {
                    setShowNoteoptions(!showNoteoptions) 
                    if(showLabelOptions === true) setShowLabelOptions(false);
                  }}
                />
                <RxCross2
                  className={` bg-gray-200 hover:bg-gray-400 rounded transition-all duration-300 ease-in-out transform
                    ${ showNoteoptions ? "opacity-100 scale-100" : "opacity-0 scale-0" } `}
                  onClick = { () => setShowNoteoptions(!showNoteoptions) }
                />
              </div>
            </div>
            {/* Note options when Triple Dot clicked */}
            {
              showNoteoptions && (
                <div className='absolute right-1 top-7 sm:w-[200px] w-[200px]'>
                  <NoteFeatures />
                </div>
              )
            }
            {/* Label options when Add Label Clicked */}
            {
              showLabelOptions && (
                <div className='border-1 absolute right-1 top-7 bg-white border-[#949392] rounded-xl shadow-2xl text-blue-950'>
                  <div className='border-0 my-3 px-3 relative'>
                    <p>My Label</p>
                    <input
                      className = 'outline-none border-1 border-[#C9C8C7] rounded pl-1 mt-1 '
                      type = 'text'
                      placeholder='Default'
                      ref = {inputLabelRef}
                      value = {noteLabel}
                      onChange = { (e) => setNoteLabel(e.target.value) }
                    />
                    <input
                      className='absolute top-0.5'
                      type='color'
                      id='style1'
                      value={noteColor}
                      disabled={noteLabel.trim() === ''}
                      onChange={(e) => {
                        setNoteColor(e.target.value);
                      }}
                    />
                  </div>
                  {labelCollection.length > 0 && (
                    <div className='border-0 flex flex-col mb-3'>
                      {labelCollection.map((currentLabel, index) => (
                        <div key={index} className="flex items-center gap-2 border-0 h-[35px] hover:bg-[#dbd7d5] transition duration-500 px-3 relative">
                          <input
                            type="checkbox"
                            value={currentLabel.LabelName}
                            ref={checkedRef.current[index]}
                            checked={(() => {
                              if (isEditing) {
                                return currentLabel.LabelName === noteLabel;
                              }
                            })()}
                            onChange={() => checkLabel(currentLabel, index)} 
                          />
                          <span>{currentLabel.LabelName}</span>     {/* or <span>{labelCollection[index].LabelName}</span> */}
                          <input
                            type='color'
                            id='style1'
                            value={ labelCollection[index].LabelColor }
                            onChange={(e) => handleColorChange(index, e.target.value)}
                          />
                        </div>
                        ))
                      }
                    </div>
                  )}
                </div>
              )
            }
            <textarea
              className='bg-[white] border-2 border-[#C9C8C7] outline-[#949392] sm:w-[98%] w-[96%] h-[80%] rounded-xl sm:ml-[1%] ml-[2%] p-2 resize-none overflow-y-auto font-mono'
              style = {{ whiteSpace: 'pre-wrap' }}
              placeholder = 'Add Your task'
              value = {inputTask}
              onChange = { (e) => setInputTask(e.target.value) }
              onClick={() => setShowLabelOptions(false) }
            />
            <div className='relative'>
              <button
                className='w-[12%] bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition duration-200 absolute right-1'
                onClick = { saveNoteButton }
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