import React from "react";
import { formStyle } from "./Form.css";
import { useState } from "react";
import Team from "./Team";

function Form(props) {
  const { handleChange, handleClick } = props;

  return (
    <div>
      <form className="form" onSubmit={(event) => handleClick(event)}>
        <p>
          <label htmlFor="name" className="formItem">
            <input
              placeholder="Name"
              id="name"
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
              type="text"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <input
          className="formItem"
          id="submit"
          type="submit"
          value="Join Us!"
        />
      </form>
    </div>
  );
}

export default Form;
