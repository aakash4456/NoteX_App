import React, { useContext, useEffect, useRef } from 'react'
import '../App.css'
import ToDoContext from '../Contexts/ToDoContext';
import { MdDeleteOutline, MdContentCopy, MdMoreVert } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import NoteFeatures from './NoteFeatures';


function Notecard() {
  const {
    notesCollection, setNotesCollection,
    setShowCreatingNote,
    setEditcurNote,
    labelCollection, setLabelCollection,
    noteLabel, setNoteLabel,
    noteColor, setNoteColor,
    showEachNoteOptions, setShowEachNoteoptions,
    showEachLabelOptions, setShowEachLabelOptions,
    checkedRef,
    inputLabelRef
  } = useContext(ToDoContext);
  
  const copyRef = useRef([]);
  
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
  
  // collecting NoteIds to show individual Note options and label options.
  useEffect(() => {
    const notesIds_for_EachNote = notesCollection.map((currentNote) => {
      return { OptionId: currentNote.id, optionstate: false}
    })
    setShowEachNoteoptions(notesIds_for_EachNote);
    
    const notesIds_for_EachLabelOpt = notesCollection.map((currentNote) => {
      return { LabelOptionId: currentNote.id, Labeloptionstate: false}
    })
    setShowEachLabelOptions(notesIds_for_EachLabelOpt);
  },[notesCollection]);
  
  // creating reference for each Note in NotesCollection so that at time of editing Note we can use particular Note's reference. 
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
      <div className=' w-full sm:mt-15 mt-10 sm:mb-15 mb-10 flex flex-wrap justify-center sm:gap-12 gap-6 p-2 z-0'>
        {
          notesCollection.map((currentNote, index) => {
            return  <div className='relative border-0' key = { index } >
                      <div 
                        className={`bg-[#F2EFF2] border-2
                          sm:min-w-[270px] w-[160px]
                          sm:h-[240px] h-[30vh]
                          flex flex-col justify-between p-1 rounded-2xl hover:rounded NoteCard-shadow hover:scale-102 z-0`}
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
                          placeholder = 'Note'
                          readOnly
                          ref = { copyRef.current[index] }
                          value = { currentNote.Note }
                          onClick = { () => EditNote(currentNote) }
                        />
                        <div className = 'text-[18px]  text-[#245F73] pb-1 pr-0.5 flex justify-end gap-3 border-0'>
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
                          <button
                            className={`absolute bg-gray-200 hover:bg-gray-400 rounded transition-all duration-300 ease-in-out transform
                              ${ showEachNoteOptions[index]?.optionstate ? "opacity-0 scale-0" : "opacity-100 scale-100" } `}
                            onClick = { () => {
                              setNoteLabel(( currentNote.MyLabel !== "Default" ? currentNote.MyLabel: '' ));
                              setNoteColor(( currentNote.MyColor !== '#172554' ? currentNote.MyColor: '#172554'));
                              // open only clicked note options.
                              setShowEachNoteoptions((prevOptions) =>
                                prevOptions.map((item, i) =>
                                  i === index ? { ...item, optionstate: true } : { ...item, optionstate: false }
                                )
                              );
                              // close other note's label options if they are opened.
                              setShowEachLabelOptions((prevOptions) =>
                                prevOptions.map((item, i) => ( { ...item, Labeloptionstate: false } ) ) 
                              );
                            }}
                          >
                            <MdMoreVert />
                          </button>
                          <button
                            className={` bg-gray-200 hover:bg-gray-400 rounded transition-all duration-300 ease-in-out transform
                              ${ showEachNoteOptions[index]?.optionstate ? "opacity-100 scale-100" : "opacity-0 scale-0" } `}
                            onClick = { () => {
                              setShowEachNoteoptions((prevOptions) =>
                                prevOptions.map((item, i) =>
                                  i === index ? { ...item, optionstate: false } : item
                                )
                              );
                            }}
                          >
                            <RxCross2 />
                          </button>
                        </div>
                      </div>
                      {
                        showEachNoteOptions[index]?.optionstate && (
                          <NoteFeatures sm_right='12' sm_top='16' right='4.5' top='4' width='120'  MyIndex={index}/>
                        )
                      }
                      { showEachLabelOptions[index]?.Labeloptionstate && 
                        <div
                          className="overlay"
                          onClick={() => {
                            setShowEachLabelOptions((prevOptions) =>
                              prevOptions.map((item, i) => ( { ...item, Labeloptionstate: false } ) ) 
                            );
                          }}
                        ></div>
                      }
                      {
                        showEachLabelOptions[index]?.Labeloptionstate && (
                          <div className='border-1
                          sm:absolute sm:right-0 sm:bottom-1
                          fixed inset-0 m-auto w-fit h-fit
                          bg-white border-[#949392] rounded-xl shadow-2xl text-blue-950 z-120'>
                            <div className='border-0 my-3 px-3 relative'>
                              <p>My Label</p>
                              <input
                                className = 'outline-none border-1 border-[#C9C8C7] rounded pl-1 mt-1 '
                                type = 'text'
                                placeholder='Default'
                                ref = {inputLabelRef}
                                value = { noteLabel }
                                onChange = { (e) => setNoteLabel(e.target.value) }
                              />
                              <input
                                className='absolute top-0.5'
                                type='color'
                                id='style1'
                                value={ noteColor }
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
                                      ref = { checkedRef.current[index] }
                                      checked={(() => {
                                        if (showEachLabelOptions[index]?.Labeloptionstate) {
                                          return currentLabel.LabelName === noteLabel;
                                        }
                                      })()}
                                      onChange={ () => checkLabel(currentLabel, index) } 
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
                            <button 
                              className='border-2 mt-5 hover:border-amber-600'
                              onClick={(e) => {
                                e.preventDefault();
                                currentNote.MyLabel = noteLabel;
                                currentNote.MyColor = noteColor;
                                setLabelCollection((prev) => (
                                  noteLabel && !prev.some((item) => item.LabelName === noteLabel)
                                    ? [...prev, { LabelName: noteLabel, LabelColor: noteColor }]
                                    : prev
                                ));
                                setShowEachLabelOptions((prevOptions) =>
                                  prevOptions.map((item, i) => ( { ...item, Labeloptionstate: false } ) ) 
                                );
                                setNoteLabel('');
                                setNoteColor('#172554')
                              }}
                            >
                              click Me
                            </button>
                          </div>
                        )
                      }
                    </div>
          })
        }
      </div>
    </>
  )
}

export default Notecard ;