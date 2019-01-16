import React from 'react';
import AddIcon from './AddButton';
import Refresh from './RefreshButton';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    root:{
     color: theme.palette.error.light
    }
});

const BottomToolBar = (props) => {
    const { classes } = props;
 return(
     <div className={classes.root}> 
        <AddIcon />
        <Refresh />
     </div>
 )
};

BottomToolBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BottomToolBar);
  

