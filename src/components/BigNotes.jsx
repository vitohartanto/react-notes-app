import { useState } from "react";
import { getInitialData } from "../utils";
import ActiveNotesButtons from "./ActiveNotesButtons";
import ArchivedNotesButtons from "./ArchivedNotesButton";
import NotesText from "./NotesText";

const BigNotes = () => {
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = notes.filter((note) => note.archived === false);
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div>
      <h1 className="text-[#F04A00] font-bold text-2xl text-center mt-10 mb-5">
        Active Notes
      </h1>
      <div className="flex flex-col items-center ">
        {activeNotes.map((note) => {
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
              <ActiveNotesButtons />
            </div>
          );
        })}
      </div>

      <h1 className="text-[#F04A00] font-bold text-2xl text-center mt-10 mb-5">
        Archived Notes
      </h1>
      <div className="flex flex-col items-center ">
        {archivedNotes.map((note) => {
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
              <ArchivedNotesButtons />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BigNotes;
