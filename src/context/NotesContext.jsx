import { createContext, useState, useEffect } from "react";
export const NoteContext = createContext();
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
        <NoteContext.Provider value={{notes, addNote, selectedNote, setSelectedNote}}>
            {children}
        </NoteContext.Provider>
    );
};