import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  login: {
    display: "grid",
    placeItems: "center",
    backgroundColor: 'black',
    height: "100vh",
    "& img": {
      height: "200px",
    },
    "& a": {
      textTransform: "uppercase",
      textDecoration: "none",
      color: "white",
      backgroundColor: "#1db954",
      padding: "20px",
      borderRadius: "99px",
      fontWeight: "800",
    },
  },
}));
