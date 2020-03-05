import React from "react";
import { Alert } from "@material-ui/lab";
import { AlertTitle } from "@material-ui/lab";

import "./Complete.css";
import Topnav from "../Topnav/Topnav";

const Complete = () => {
  return (
    <React.Fragment>
      <Topnav />
      <div className="container text-center">
        <Alert severity="success"></Alert>
        <div className="order-sucess">Order Confirmation!</div>
        <h5>Thank you for placing order with us.</h5>
        <div className="backHome">
          <form method="get" action="/">
            <button type="submit">Continue Shopping</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Complete;
