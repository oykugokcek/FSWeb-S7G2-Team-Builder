import React, { useState } from "react";
import style from "./Form.css";
import TeamMateEdit from "./TeamMateEdit";

export default function TeamMate({ person, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(person.name);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (person) => {
    setShowEdit(false);
    onEdit(person.id, person.newName, person.newEmail, person.newRole);
  };

  let content;
  if (showEdit) {
    content = <TeamMateEdit person={person} onSubmit={handleSubmit} />;
  }

  return (
    <div>
      <div className="info">
        <div className="names">{person.name}</div>
        <div className="roles">{person.role}</div>
        <button onClick={handleDeleteClick}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
        <br />
      </div>
      <p>{content}</p>
    </div>
  );
}
