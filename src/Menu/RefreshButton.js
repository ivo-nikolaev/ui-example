import React from 'react';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/RefreshOutlined';
import { withStyles } from '@material-ui/core/styles';

/*
    Todo It should refresh the page with the latest data while it stays in the same component (in Router)
 */

const styles = (theme) => ({
    root:{
     width: 36,
     height: 36,
     marginLeft: 10,
    }
});

const refresh = () => alert('Under Construction');

export const RefreshButton = (props) => {
    const { classes } = props;
    return(
    <Button
      className={classes.root}
      variant="fab"
      color="secondary"
      aria-label="Refresh"
      onClick={refresh}
    >
      <RefreshIcon />
    </Button>
    )
};


export default withStyles(styles)(RefreshButton);