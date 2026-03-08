import { useContext, useMemo } from 'react';
import { NotesProvider, NotesContext } from './context/NotesContext';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import "./index.css";

const Dashboard =()=>{
  const { notes } = useContext(NotesContext);
  const totalNotes = useMemo(()=>{
    return notes.length;
  },[notes]);

  return (
    <div className='container'>
      <h2 className='title'>Notes Dashboard</h2>
      <NoteInput/>
      <div className='notesCount'>Total Notes: <span>{totalNotes} </span></div>
      <NoteList/>
    </div>

  );
};

const App =()=>{
  return(
    <NotesProvider>
      <Dashboard/>
    </NotesProvider>
  );
};
export default App;
