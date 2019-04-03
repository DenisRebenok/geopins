import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Face from "@material-ui/icons/Face";

const PinContent = ({ classes }) => {
  return <div>PinContent</div>;
};

const styles = theme => ({
  root: {
    padding: "1em 0.5em",
    textAlign: "center",
    width: "100%"
  },
  icon: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withStyles(styles)(PinContent);
