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
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(5px)",
    border: "2px solid red",
  },
  froid: {
    backgroundColor: "blue",
  },
  chaud: {
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
    <Container className={temperature <= 15 ? classes.froid : classes.chaud}>
      <Container className={classes.root}>
        {temperature <= 15 ? (
          <Typography> il fait froid</Typography>
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
