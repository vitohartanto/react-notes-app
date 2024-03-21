import { showFormattedDate } from "../../utils";

const ActiveNotesText = ({ id, title, body, createdAt, archived }) => {
  return (
    <div>
      <h1 className="text-[#F04A00] text-2xl font-bold">{title}</h1>
      <p className="text-sm text-[#F04A00] mt-2">
        {showFormattedDate(createdAt)}
      </p>
      <p className="text-[#F04A00] mt-2">{body}</p>
    </div>
  );
};

export default ActiveNotesText;
