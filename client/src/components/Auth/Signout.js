import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import ExitToApp from "@material-ui/icons/ExitToApp";
// import Typography from "@material-ui/core/Typography";

const Signout = ({ classes }) => {
  return <div>Signout</div>;
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "orange"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "orange"
  }
};

export default withStyles(styles)(Signout);
