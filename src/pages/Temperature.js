import React from "react";
import { Container, Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  temperatureState,
  unsubscribeTemperature,
} from "../redux/redux-slices/temperatureSlice";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "92vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(5px)",
  },
  typography: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "black",
    textAlign: "center",
  },
  cold: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  hot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  button: {
    padding: "1rem",
    fontWeight: "bold",
    boxShadow: "0px 5px 10px black",
  },
});

export default function Temperature() {
  const temperature = useSelector(temperatureState);
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();

  const handleOnClickButton = () => {
    dispatch(unsubscribeTemperature());
    history.push("/");
  };

  return (
    <Container className={classes.root}>
      <Container className={temperature <= 15 ? classes.cold : classes.hot}>
        {temperature <= 15 ? (
          <Typography className={classes.typography}> il fait froid</Typography>
        ) : (
          <Typography>il fait chaud</Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleOnClickButton}
        >
          Back
        </Button>
      </Container>
    </Container>
  );
}
