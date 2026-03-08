import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const NoteList = ()=>{
    const { notes, selectedNote, setSelectedNote } = useContext(NotesContext);

    return(
        <ul>
            {notes.map((note)=>(
                <li key={note.id} className={selectedNote === note.id ? "selected" : ""} onClick={()=>setSelectedNote(note.id)}>
                    {note.text}
                </li>
            ))}
        </ul>
    );
};
export default NoteList;
