import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../styles/withRoot';

import Dashboard from '../dashboard/Dashboard';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Index extends React.Component {

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
