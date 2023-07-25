import { useState, useEffect } from "react";
import noteService from "./services/notes";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  // Get Data from the Server
  useEffect(() => {
    noteService
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
    });
  }, []);
  ///////////////////////

  // Update important button
  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const chandedNote = { ...note, important: !note.important };

    noteService
      .update(id, chandedNote)
      .then((returnedNote) =>
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
      );
  };
  ///////////////////

  // Create a new NOTE
  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };
  // //////////////////////

  const hanldeNoteChange = (event) => {
    setNewNote(event.target.value);
  };
  //////////////////

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  ////////////////////
  return (
    <div>
      <h1>Notes</h1>

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>

      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={hanldeNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
