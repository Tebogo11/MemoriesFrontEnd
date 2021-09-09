import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
//images
import memories from "../../images/memories.png";
const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logOut();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logOut = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
  };
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            variant="h2"
            align="center"
            className={classes.heading}
          >
            Memories
          </Typography>
          <img
            src={memories}
            alt="memories"
            height="60"
            className={classes.image}
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.puprle}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography
                component={Link}
                to="/"
                variant="h6"
                align="center"
                className={classes.userName}
              >
                {user.result.name}
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                className={classes.logout}
                onClick={logOut}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
