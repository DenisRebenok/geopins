import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import Context from '../context';
import NoContent from './Pin/NoContent';
import CreatePin from './Pin/CreatePin';
import PinContent from './Pin/PinContent';

const Blog = ({ classes }) => {
  const { draft, currentPin } = useContext(Context).state;

  let BlogContent;
  if (!draft && !currentPin) {
    BlogContent = NoContent;
  } else if (draft && !currentPin) {
    BlogContent = CreatePin;
  } else if (!draft && currentPin) {
    BlogContent = PinContent;
  }
  return (
    <Paper className={classes.root}>
      <BlogContent />
    </Paper>
  );
};

const styles = {
  root: {
    minWidth: 350,
    maxWidth: 400,
    maxHeight: 'calc(100vh - 64px)',
    overflowY: 'scroll',
    display: 'flex',
    justifyContent: 'center'
  },
  rootMobile: {
    maxWidth: '100%',
    maxHeight: 300,
    overflowX: 'hidden',
    overflowY: 'scroll'
  }
};

export default withStyles(styles)(Blog);
