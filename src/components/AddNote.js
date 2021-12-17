import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const limitChar = 250;

  const handleChange = (e) => {
    if (limitChar - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
    // console.log(e.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      alert("You need to write something in order to save the note");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note ..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{limitChar - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
