import NotesText from "../both/NotesText";
import ArchivedNotesButtons from "./ArchivedNotesButton";

const ArchivedNotes = ({ archivedNotes, onDeleteNote, onUnarchiveNote }) => {
  return (
    <div className="flex flex-col items-center ">
      {archivedNotes.length > 0 ? (
        archivedNotes.map((note) => {
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
              <ArchivedNotesButtons
                noteId={note.id}
                onDeleteNote={onDeleteNote}
                onUnarchiveNote={onUnarchiveNote}
              />
            </div>
          );
        })
      ) : (
        <div className="text-center text-[#F04A00] font-semibold">
          No archived notes
        </div>
      )}
    </div>
  );
};

export default ArchivedNotes;
