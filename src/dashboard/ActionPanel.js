import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    overflowX: 'auto',
  },
};


function ActionPanel(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
     <Paper className={classes.root}>
      <Typography varian="h1">
        STUFF HAPPENS HERE
      </Typography>
      </Paper>
    </Paper>
  );
}

ActionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionPanel);