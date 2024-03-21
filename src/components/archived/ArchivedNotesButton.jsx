import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faTrash } from "@fortawesome/free-solid-svg-icons";

const ArchivedNotesButtons = ({ noteId, onDeleteNote }) => {
  const handleDeleteNote = () => {
    onDeleteNote(noteId); // Pass noteId to onDeleteNote
  };
  return (
    <div className="absolute top-6 right-4">
      <button className="mr-3" onClick={handleDeleteNote}>
        <FontAwesomeIcon
          className="text-2xl"
          icon={faTrash}
          style={{ color: "#f04a00" }}
        />
      </button>
      <button>
        <FontAwesomeIcon
          className="text-2xl"
          icon={faArrowsRotate}
          style={{ color: "#f04a00" }}
        />
      </button>
    </div>
  );
};

export default ArchivedNotesButtons;
