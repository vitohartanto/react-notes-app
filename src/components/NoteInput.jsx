import React, { useState } from "react";

const NoteInput = ({ setNotes }) => {
  const [newNote, setNewNote] = useState({ title: "", body: "" });

  const handleInputChange = (event) => {
    setNewNote((prevNote) => ({
      ...prevNote,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAddNote = (event) => {
    event.preventDefault();

    if (newNote.title.trim() !== "" && newNote.body.trim() !== "") {
      const id = +new Date();
      const currentDate = new Date();
      const createdAt = currentDate.toISOString();
      const archived = false;

      setNotes((prevNotes) => [
        ...prevNotes,
        { id, ...newNote, createdAt, archived },
      ]);

      // Reset input fields after adding a note
      setNewNote({ title: "", body: "" });
    } else {
      alert("Please fill in both title and body before adding a note.");
    }
  };

  return (
    <div>
      <h1 className="text-[#F04A00] font-bold text-2xl text-center mt-10">
        Add Notes
      </h1>

      <form action="" className="flex flex-col" onSubmit={handleAddNote}>
        <p className="text-right mr-10 mt-5 text-[#F04A00]">
          Characters left: 50
        </p>
        <input
          type="text"
          name="title"
          className="border-[#F04A00] p-4 mx-10 mb-5 mt-2 rounded-2xl border-2"
          placeholder="Title for your note"
          value={newNote.title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          cols="30"
          rows="10"
          className="border-[#F04A00] p-4 mx-10 mb-5 rounded-2xl border-2"
          placeholder="Write your notes here"
          value={newNote.body}
          onChange={handleInputChange}
        ></textarea>
        <button className="bg-[#F04A00] rounded-2xl mx-10 px-4 py-3 text-white text-xl font-semibold hover:bg-white hover:text-[#F04A00] hover:border-[#F04A00] hover:border-2">
          + Add
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
