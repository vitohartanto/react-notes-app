import NotesText from "../both/NotesText";
import ActiveNotesButtons from "./ActiveNotesButtons";

const ActiveNotes = ({ activeNotes, onDeleteNote, onArchiveNote }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center md:mx-10">
      {activeNotes.length > 0 ? (
        activeNotes.map((note) => {
          return (
            <div
              key={note.id}
              className="border-[#F04A00] border-2 rounded-2xl p-6 w-[300px] h-[360px] md:w-80 md:h-[450px] mb-10 sm:mx-5 bg-white relative overflow-hidden"
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
        <div className="text-center text-[#F04A00] font-semibold lg:text-lg">
          No active notes
        </div>
      )}
    </div>
  );
};

export default ActiveNotes;
