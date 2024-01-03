import React from "react";

import prev from "../../assets/images/prev.png";

const RightButton = (onClick, onDisable) => {
  return (
    <img
      src={prev}
      alt=""
      width="35px"
      onClick={onClick}
      disabled={onDisable}
      height="35px"
      style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
    />
  );
};

export default RightButton;
