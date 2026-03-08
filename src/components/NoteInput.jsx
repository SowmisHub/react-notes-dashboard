import { useState, useRef, useEffect, useContext } from "react";
import { NoteContext } from "../context/NotesContext";

const NoteInput =()=>{
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const { addNote } = useContext(NoteContext);

    useEffect(()=>{
        inputRef.current.focus();
    },[]);



    const handleAdd =()=>{
        if (input.trim()==="") return;
        addNote(input);
        setInput("");
    };
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Enter Note..." value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={handleAdd}>Add Note</button>
        </div>
    );
};

export default NoteInput;