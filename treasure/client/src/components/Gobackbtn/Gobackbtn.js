import React from "react";
import "./Gobackbtn.css";

const Gobackbtn = props => {
  return (
    <div className="goback-btn">
      <input type="button" value="<" onclick="history.back(-1)" />
    </div>
  );
};

export default Gobackbtn;
