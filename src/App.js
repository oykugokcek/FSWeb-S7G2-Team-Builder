import React from "react";
import Form from "./Components/Form";
import TeamList from "./Components/TeamList";
import TeamMate from "./Components/TeamMate";
import { useState } from "react";

let welcomeMessage;
function App() {
  const [team, setTeam] = useState([]);

  const createPerson = (person) => {
    if (team.filter((item) => item.name === person.name).length === 0) {
      const updatedTeamData = [
        ...team,
        {
          id: Math.round(Math.random() * 9999),
          name: person.name,
          email: person.email,
          role: person.role,
        },
      ];
      setTeam(updatedTeamData);
      console.log(team);
    } else {
      alert("You have already sign up!");
    }
  };

  const deletePersonByName = (name) => {
    const updatedTeamData = team.filter((person) => {
      return person.name !== name;
    });
    setTeam(updatedTeamData);
  };

  const editPersonByName = (id, newName, newEmail, newRole) => {
    const updatedTeamData = team.map((person) => {
      if (person.id === id) {
        return { ...person, name: newName, email: newEmail, role: newRole };
      }
    });
    setTeam(updatedTeamData);
  };

  return (
    <div className="App">
      <h1>Enter your info to sign up!</h1>
      <Form onCreate={createPerson} />
      <TeamList
        team={team}
        onDelete={deletePersonByName}
        onEdit={editPersonByName}
      />
    </div>
  );
}

export default App;
