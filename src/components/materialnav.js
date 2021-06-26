

import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Technologies from "./pages/Technologies";
// import Portfolio from "./pages/Portfolio";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import ComputerIcon from '@material-ui/icons/Computer';
import WorkIcon from '@material-ui/icons/Work';

const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1,
    grow: 2,
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar id ="backnav" className={classes.aboveDrawer}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
);

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Router history={history}>
    <Drawer variant={variant} open={open} onClose={onClose}
                classes={{
                  paper: classes.drawerPaper
                }}
    >
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === 'persistent'
        })}
      />
      <List >
      <ListItem button component={Link} to="/Home" onClick={onItemClick('Home')}>
            <HomeIcon/>
          <ListItemText className="matnavhome">Memory Notes</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/Home" onClick={onItemClick('Home')}>
            <HomeIcon/>
          <ListItemText className="matnav">Home</ListItemText>
        </ListItem>
        <ListItem  button component={Link} to="/About" onClick={onItemClick('About')}>
            <InfoIcon/>
          <ListItemText className="matnav" >About Us</ListItemText>
        </ListItem>
        <ListItem  button component={Link} to="/portfolio" onClick={onItemClick('Portfolio')}>
            <WorkIcon/>
          <ListItemText className="matnav">Mood History</ListItemText>
        </ListItem>
        <ListItem  button component={Link} to="/portfolio" onClick={onItemClick('Portfolio')}>
            <WorkIcon/>
          <ListItemText className="matnav">Mood Capture</ListItemText>
        </ListItem>
        <ListItem  button component={Link} to="/Contact" onClick={onItemClick('Contact')}>
            <ContactsIcon/>
          <ListItemText className="matnav" >Contact Us</ListItemText>
        </ListItem>
        
      </List>
    </Drawer>
    <main className={classes.content}>
        {/* <Route exact path ="/" component={Home}/>
        <Route exact path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Technologies" component={Technologies} />
        <Route path="/Portfolio" component={Portfolio} /> */}
    </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('Home');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
