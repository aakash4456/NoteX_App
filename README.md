# NoteX - A Minimalist Note-Taking and To-Do Management App

## 🚀 Overview

**NoteX** is a modern and feature-rich note-taking and to-do management web app built using **React, TailwindCSS, and React Router DOM**. It provides a seamless and intuitive way to manage notes and to-do tasks efficiently.

## ✨ Features

### 📝 Notes Management

- **Add Notes**: Create unlimited notes with ease.
- **Duplicate Notes**: Quickly clone any existing note.
- **Custom Labels**: Assign customizable labels with distinct border colors for better organization.
- **Text Formatting**: Supports **bold, italic, underline**, etc., for better readability.
- **Local Storage**: Notes persist even after a page reload.

### ✅ To-Do Management

- **Task Addition**: Easily add new tasks.
- **Task Listing**: View all tasks in an organized manner.
- **State Management**: Uses React Context API to efficiently manage tasks.

### 🌟 Additional Features

- **React Router DOM**: Enables smooth navigation between different sections.
- **State Management**: Utilizes Context API for efficient data handling.
- **Framer Motion**: Adds smooth animations for an enhanced UI experience.
- **Mobile-Friendly**: Fully responsive design that works seamlessly across devices.

---

## 📁 Project Structure

```
NoteX_App/
│── public/
│   ├── NoteX_logo.webp      # App logo
│   ├── vite.svg             # Vite default SVG
│
│── src/
│   │── assets/              # Additional assets (if any)
│   │
│   │── Components/          # All UI components
│   │   ├── AddNotes.jsx     # Component to add new notes
│   │   ├── Footer.jsx       # Footer section
│   │   ├── Home.jsx         # Home screen
│   │   ├── MyNotes.jsx      # My Notes page
│   │   ├── MyToDos.jsx      # My To-Dos page
│   │   ├── NavBar.jsx       # Navigation bar
│   │   ├── Notecard.jsx     # Individual note component
│   │   ├── NoteFeatures.jsx # Displays features of NoteX
│   │   ├── NoteXLogo.jsx    # Logo component
│   │   ├── ToDoAddTask.jsx  # Add new To-Do task
│   │   ├── ToDoTaskList.jsx # List of To-Do tasks
│   │
│   │── Contexts/            # Context API for state management
│   │   ├── ForToDos_Context.js          # Context for To-Do tasks
│   │   ├── ForToDos_ContextProvider.jsx # Provider for To-Do context
│   │   ├── ToDoContext.js                # Context for Notes
│   │   ├── ToDoContextProvider.jsx       # Provider for Notes
│   │
│   ├── App.css             # Global CSS styles
│   ├── App.jsx             # Main app file
│   ├── index.css           # Global CSS settings
│   ├── main.jsx            # React entry file
│
│── .gitignore              # Git ignore file
│── eslint.config.js        # ESLint configuration
│── index.html              # Main HTML file
│── package.json            # Dependencies and scripts
│── vite.config.js          # Vite configuration
```

---

## ⚡ Installation & Setup

### Prerequisites

Ensure you have **Node.js** installed on your system.

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/aakash4456/NoteX_App.git
cd notex
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the App

```sh
npm run dev
```

The app will start on [**http://localhost:5173/**](http://localhost:5173/)

---

## 🛠️ Technologies Used

- **React** - UI Framework
- **React Router DOM** - Client-side navigation
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **UUID** - Unique ID generation
- **Vite** - Fast build tool for development

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing

If you'd like to contribute, feel free to submit a pull request or open an issue.

**Happy Coding! 🎉**

