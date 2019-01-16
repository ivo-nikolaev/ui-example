import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root:{
        textTransform: 'capitalize'
    }
});

class FlowGroup extends React.Component {
  state = {
    anchorEl: null,
    title: 'ValueChain',
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChoise = (event) => {
      this.setState({ anchorEl: null,
                      title: event.target.innerText})
  }

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button
          className={classes.root}
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.state.title}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleChoise}>Flow Group</MenuItem>
          <MenuItem onClick={this.handleChoise}>Core Process</MenuItem>
          <MenuItem onClick={this.handleChoise}>Swimlane</MenuItem>
          <MenuItem onClick={this.handleChoise}>Value Chain</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(FlowGroup);