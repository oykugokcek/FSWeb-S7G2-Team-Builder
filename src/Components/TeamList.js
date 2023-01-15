import React from "react";
import TeamMate from "./TeamMate";
import style from "./Form.css";

function TeamList({ team, onDelete, onEdit }) {
  const renderedTeamList = team.map((person) => {
    return <TeamMate person={person} onDelete={onDelete} onEdit={onEdit} />;
  });
  return (
    <div>
      <div className="info" id="header">
        <div className="names">Name</div>
        <div className="roles">Role</div>
      </div>

      <p>{renderedTeamList}</p>
    </div>
  );
}

export default TeamList;
