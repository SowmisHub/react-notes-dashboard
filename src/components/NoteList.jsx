import { useContext } from "react";
import { NoteContext } from "../context/NotesContext";

const NoteList = ()=>{
    const { notes, selectedNote, setSelectedNote } = useContext(NoteContext);

    return(
        <ul>
            {notes.map((note)=>(
                <li key={note.id} onClick={()=>setSelectedNote(note.id)}
                style={{cursor: "pointer",
                        padding: "8px",
                        backgroundColor: selectedNote === note.id ? "yellow" : "white",
                        border: "1px solid gray",
                        marginTop: "5px"
                }}>
                    {note.text}
                </li>
            ))}
        </ul>
    );
};
export default NoteList;
