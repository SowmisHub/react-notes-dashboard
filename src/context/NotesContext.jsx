import { createContext, useState, useEffect } from "react";
export const NotesContext = createContext();
export const NotesProvider = ({ children }) =>{
    const [notes, setNotes] = useState(()=>{
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(()=>{
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (noteText) =>{
        const newNote ={
            id: Date.now(),
            text: noteText
        };
        setNotes([...notes, newNote]);
    };
    return(
        <NotesContext.Provider value={{notes, addNote, selectedNote, setSelectedNote}}>
            {children}
        </NotesContext.Provider>
    );
};