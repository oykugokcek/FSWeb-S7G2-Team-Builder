import React from "react";
function Team({ team, teamMate, welcomeMessage }) {
  return (
    <div>
      <p>{welcomeMessage}</p>
      {team.map((person, index) => (
        <p>
          {person.name}, {person.role}
        </p>
      ))}
    </div>
  );
}

export default Team;

// const render = team.map((item) => {
//   <ul>
//     <li>{item.name}</li>
//     <li>{item.email}</li>
//     <li>{item.role}</li>
//   </ul>;
// });

// return (
//   <div>
//     <p>{welcomeMessage}</p>
//     <div>{render}</div>
//   </div>
// );
