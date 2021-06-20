import React from "react";
import { Container, Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  temperatureState,
  unsubscribeTemperature,
} from "../redux/redux-slices/temperatureSlice";
import { useHistory } from "react-router-dom";

export default function Temperature() {
  const temperature = useSelector(temperatureState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClickButton = () => {
    dispatch(unsubscribeTemperature());
    history.push("/");
  };

  return (
    <Container>
      {temperature <= 15 ? (
        <Typography> il fait froid</Typography>
      ) : (
        <Typography>il fait chaud</Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleOnClickButton}>
        Back
      </Button>
    </Container>
  );
}
