import NoteInput from "./components/NoteInput";
import "./App.css";

import Navbar from "./components/Navbar";

import BigNotes from "./components/BigNotes";

const App = () => {
  return (
    <div>
      <Navbar />
      <NoteInput />
      <BigNotes />
    </div>
  );
};

export default App;
