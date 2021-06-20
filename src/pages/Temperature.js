import React from "react";
import { Container, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { temperatureState } from "../redux/redux-slices/temperatureSlice";
import { unsubscribeTemperature } from "../redux/redux-slices/temperatureSlice";
import { useHistory } from "react-router-dom";
// import { subscribeTemperature } from "../redux/redux-slices/temperatureSlice";

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
      {`temperature : ${temperature}`}
      <Button variant="contained" color="primary" onClick={handleOnClickButton}>
        Back
      </Button>
    </Container>
  );
}
