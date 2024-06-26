function Navbar({ handleSearchChange }) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#F04A00] fixed top-0 w-full z-50">
      <h1 className="text-white text-2xl font-bold">Notes</h1>
      <input
        className="px-4 p-2 rounded-2xl border-[#F04A00] border-2"
        placeholder="Find notes by title"
        type="text"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Navbar;
