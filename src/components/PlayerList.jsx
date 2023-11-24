import React from "react";
import Players from "./Players";
import { data } from "../players";
import "./style.css"
function PlayerList() {
  return (
    <div className="player-container">
      <div className="first-s">
        {" "}
        {data.map((player, index) => {
          while (index >= 0 && index < 2) {
            return <Players {...player} />;
          }
        })}
      </div>
      <div className="second-s">
        {" "}
        {data.map((player, index) => {
          while (index >= 2 && index < 4) {
            return <Players {...player} />;
          }
        })}
      </div>
    </div>
  );
}

export default PlayerList;
