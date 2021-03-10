import React from "react";
import useStyles from "./styles";
import logo from "../../assets/spotifyV2.jpg";
import { accessUrl } from "../../lib/spotify";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <img src={logo} alt="spotify-logo" />
      <a href={accessUrl}>login with spotify</a>
    </div>
  );
};

export default Login;
