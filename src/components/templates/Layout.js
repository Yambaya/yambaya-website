import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    display: 'flex',
    flexDirection: 'column'
  }
}));

function Layout({children}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
