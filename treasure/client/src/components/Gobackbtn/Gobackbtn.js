import React from "react";
import "./Gobackbtn.css";

const Gobackbtn = props => {
  return (
    <div className="goback-btn">
      <i
        className="far fa-arrow-alt-circle-left"
        type="button"
        value=""
        onClick="goBack()"
      >
        {" "}
      </i>
    </div>
  );
};

export default Gobackbtn;
