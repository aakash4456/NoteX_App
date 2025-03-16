import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import Home from './Components/Home.jsx'
import ToDoContextProvider from './Contexts/ToDoContextProvider.jsx'
import MyNotes from './Components/MyNotes.jsx'
import MyToDos from './Components/MyToDos.jsx'
import ForToDos_ContextProvider from './Contexts/ForToDos_ContextProvider.jsx'
import ToDoAddTask from './Components/ToDoAddTask.jsx'
import ToDoTaskList from './Components/ToDoTaskList.jsx'
import { createHashRouter } from 'react-router-dom';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Home />}/>
//       <Route
//         path='myNotes'
//         element={<ToDoContextProvider>  <MyNotes />  </ToDoContextProvider>} />
//       <Route
//         path='myToDos'
//         element = { <ForToDos_ContextProvider> <MyToDos /> </ForToDos_ContextProvider> } />
//     </Route>
//   )
// )


const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='myNotes' element={<ToDoContextProvider> <MyNotes /> </ToDoContextProvider>} />
      <Route path='myToDos' element={<ForToDos_ContextProvider> <MyToDos /> </ForToDos_ContextProvider>} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
