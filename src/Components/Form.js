import React from "react";
import { formStyle } from "./Form.css";
import { useState } from "react";
import TeamList from "./TeamList";

function Form(props) {
  const [teamMate, setTeamMate] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });
  const { onCreate } = props;

  const handleChange = (event) => {
    const { id, value } = event.target;
    setTeamMate({
      ...teamMate,
      [id]: value,
    });
    console.log(teamMate);
  };

  const handleClick = (event) => {
    event.preventDefault();
    onCreate(teamMate);
  };

  return (
    <div>
      <form className="form">
        <p>
          <label htmlFor="name" className="formItem">
            <input
              placeholder="Name"
              id="name"
              value={teamMate.name}
              type="text"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email" className="formItem">
            <input
              placeholder="Email"
              id="email"
              value={teamMate.email}
              type="text"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="role" className="formItem">
            <input
              placeholder="Role"
              id="role"
              value={teamMate.role}
              type="text"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <button onClick={handleClick}>Join Us!</button>
      </form>
    </div>
  );
}

export default Form;
