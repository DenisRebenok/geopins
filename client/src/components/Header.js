import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Map from "@material-ui/icons/Map";
// import Typography from "@material-ui/core/Typography";

const Header = ({ classes }) => {
  return <div>Header</div>;
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  icon: {
    marginRight: theme.spacing.unit,
    color: "green",
    fontSize: 45
  },
  mobile: {
    display: "none"
  },
  picture: {
    height: "50px",
    borderRadius: "90%",
    marginRight: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Header);
