import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: 36,
    maxHeight: 36,
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 36,
    // fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 2,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      opacity: 1,
    },
    '&$tabSelected': {
      color: 'black',
    },
    // '&:focus': {
    //   color: 'red',
    // },
  },
  tabSelected: {
    backgroundColor: theme.palette.secondary.main,
  },
  typography: {
    // padding: theme.spacing.unit * 3,
  },
});

class TopToolBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state
    const { classes } = this.props;

    return (
        <Tabs
          value={value}
          className={classes.root}
          fullWidth
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
          <Tab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="Test" />
        </Tabs>
    );
  }
}

TopToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopToolBar);
