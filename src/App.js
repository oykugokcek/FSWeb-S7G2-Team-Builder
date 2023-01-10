import React from "react";
import Form from "./Components/Form";
import Team from "./Components/Team";
import TeamList from "./Components/TeamList";
import { formStyle } from "./Components/Form.css";
import { useState } from "react";
import { appStyle } from "./App.css";
import { Route } from "react-router-dom";

let welcomeMessage;
function App() {
  const [teamMate, setTeamMate] = useState({ name: "", email: "", role: "" });
  const [team, setTeam] = useState([]);

  console.log(team);

  function handleChange(event) {
    console.log(event);
    setTeamMate({ ...teamMate, [event.target.id]: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    let firstName = teamMate.name.split(" ").slice(0, -1).join(" ");
    welcomeMessage = "Welcome " + firstName + " thank you for join us!";
    // if (team.filter((item) => item.name === teamMate.name).length === 0) {
    setTeam([...team, teamMate]);
  }

  return (
    <div className="App">
      <h1>Enter your info to sign up!</h1>
      <Form handleChange={handleChange} handleClick={handleClick} />
      <Team team={team} teamMate={teamMate} welcomeMessage={welcomeMessage} />
      {/* <Route exact path="/teamlist">
        <TeamList team={team} />
      </Route> */}
    </div>
  );
}

export default App;
