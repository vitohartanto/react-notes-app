import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faTrash } from "@fortawesome/free-solid-svg-icons";

const ActiveNotesButtons = () => {
  return (
    <div className="absolute top-6 right-4">
      <button className="mr-3">
        <FontAwesomeIcon
          className="text-2xl"
          icon={faTrash}
          style={{ color: "#f04a00" }}
        />
      </button>
      <button>
        <FontAwesomeIcon
          className="text-2xl"
          icon={faBoxArchive}
          style={{ color: "#f04a00" }}
        />
      </button>
    </div>
  );
};

export default ActiveNotesButtons;
