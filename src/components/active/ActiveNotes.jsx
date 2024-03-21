import NotesText from "../both/NotesText";
import ActiveNotesButtons from "./ActiveNotesButtons";

const ActiveNotes = ({ activeNotes, onDeleteNote, onArchiveNote }) => {
  return (
    <div className="flex flex-col items-center ">
      {activeNotes.length > 0 ? (
        activeNotes.map((note) => {
          return (
            <div
              key={note.id}
              className="border-[#F04A00] border-2 rounded-2xl p-6 w-80 mb-5 bg-white relative"
            >
              <NotesText
                title={note.title}
                body={note.body}
                createdAt={note.createdAt}
              />
              <ActiveNotesButtons
                noteId={note.id}
                onDeleteNote={onDeleteNote}
                onArchiveNote={onArchiveNote}
              />
            </div>
          );
        })
      ) : (
        <div className="text-center text-[#F04A00] font-semibold">
          No active notes
        </div>
      )}
    </div>
  );
};

export default ActiveNotes;
