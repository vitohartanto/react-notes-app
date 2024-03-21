import { useState } from "react";
import { getInitialData } from "../../utils";

import NoteInput from "../NoteInput";
import ActiveNotes from "../active/ActiveNotes";
import ArchivedNotes from "../archived/ArchivedNotes";

const BigNotes = ({ searchQuery }) => {
  const [notes, setNotes] = useState(getInitialData());

  // Filter notes based on search query
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleArchiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    setNotes(updatedNotes);
  };

  const handleUnarchiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="mb-12">
      <NoteInput setNotes={setNotes} />
      <h1 className="text-[#F04A00] font-bold text-2xl text-center mt-10 mb-5">
        Active Notes
      </h1>
      <ActiveNotes
        activeNotes={activeNotes}
        onDeleteNote={handleDeleteNote}
        onArchiveNote={handleArchiveNote}
      />

      <h1 className="text-[#F04A00] font-bold text-2xl text-center mt-10 mb-5">
        Archived Notes
      </h1>
      <ArchivedNotes
        archivedNotes={archivedNotes}
        onDeleteNote={handleDeleteNote}
        onUnarchiveNote={handleUnarchiveNote}
      />
    </div>
  );
};

export default BigNotes;
