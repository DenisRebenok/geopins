import React from "react";
import { withStyles } from "@material-ui/core";
// import InputBase from "@material-ui/core/InputBase";
// import IconButton from "@material-ui/core/IconButton";
// import ClearIcon from "@material-ui/icons/Clear";
// import SendIcon from "@material-ui/icons/Send";
// import Divider from "@material-ui/core/Divider";

const CreateComment = ({ classes }) => {
  return <div>CreateComment</div>;
};

const styles = theme => ({
  form: {
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  clearButton: {
    padding: 0,
    color: "red"
  },
  sendButton: {
    padding: 0,
    color: theme.palette.secondary.dark
  }
});

export default withStyles(styles)(CreateComment);
