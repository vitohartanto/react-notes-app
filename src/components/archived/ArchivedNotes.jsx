import NotesText from "../both/NotesText";
import ArchivedNotesButtons from "./ArchivedNotesButton";

const ArchivedNotes = ({ archivedNotes, onDeleteNote, onUnarchiveNote }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center md:mx-10">
      {archivedNotes.length > 0 ? (
        archivedNotes.map((note) => {
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
              <ArchivedNotesButtons
                noteId={note.id}
                onDeleteNote={onDeleteNote}
                onUnarchiveNote={onUnarchiveNote}
              />
            </div>
          );
        })
      ) : (
        <div className="text-center text-[#F04A00] font-semibold lg:text-lg">
          No archived notes
        </div>
      )}
    </div>
  );
};

export default ArchivedNotes;
