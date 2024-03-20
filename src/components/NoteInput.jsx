const NoteInput = () => {
  return (
    <div>
      <h1 className="text-[#F04A00] font-bold text-2xl text-center mt-10">
        Add Notes
      </h1>

      <form action="" className="flex flex-col">
        <p className="text-right mr-10 mt-5 text-[#F04A00]">
          Characters left: 50
        </p>
        <input
          type="text"
          className="border-[#F04A00] p-4 mx-10 mb-5 mt-2 rounded-2xl border-2"
          placeholder="Title for your note"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="border-[#F04A00] p-4 mx-10 mb-5 rounded-2xl border-2"
          placeholder="Write your notes here"
        ></textarea>
        <button className="bg-[#F04A00] rounded-2xl mx-10 px-4 py-3 text-white text-xl font-semibold hover:bg-white hover:text-[#F04A00] hover:border-[#F04A00] hover:border-2">
          + Add
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
