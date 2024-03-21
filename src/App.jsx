import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import BigNotes from "./components/both/BigNotes";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar handleSearchChange={handleSearchChange} />
      <BigNotes searchQuery={searchQuery} />
    </div>
  );
};

export default App;
