import React from "react";

import PropTypes from "prop-types";

function Players({img,name,nationality,jerseyNumber,team}) {
  return (
    <div className="card-container">
      <div className="Block">
        <div className="info">
          <img src={jerseyNumber} alt="" width={50} />
          <img src={nationality} alt="" width={50} />
          <img src={team} alt="" width={50} />
        </div>
        <img src={img} alt="" width={200} />
      </div>
      <h1>{name}</h1>
    </div>
  );
}
  Players.defaultProps = {
    img: "https://cdn-icons-png.flaticon.com/512/606/606545.png",
    team: "https://cdn-icons-png.flaticon.com/512/8548/8548925.png",
    nationality: "https://cdn-icons-png.flaticon.com/512/1378/1378583.png",
    jerseyNumber:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jersey_red_number.svg/2560px-Jersey_red_number.svg.png",
    name: "Football Player",
  };
  Players.propTypes = {
  img: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.string,
  name: PropTypes.string,
};
export default Players;
