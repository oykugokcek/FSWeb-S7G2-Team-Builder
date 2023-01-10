import React from "react";
import { Route, useHistory } from "react-router-dom";

export default function TeamList(props) {
  const { team } = props;
  const history = useHistory();
  function toMainPage() {
    history.push("/");
  }

  return (
    <div>
      <p>{team.name}</p>
      <p>{team.email}</p>
      <p>{team.role}</p>

      <div onClick={toMainPage} className="home-button">
        Anasayfa
      </div>
    </div>
  );
}
