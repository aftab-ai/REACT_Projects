import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // Adding notes function
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // Deletion the notes function
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Notes area */}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <>
            {/* Adding the notes */}
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          </>
        );
      })}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
