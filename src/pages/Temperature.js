import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { temperatureState } from "../redux/redux-slices/temperatureSlice";
import { useDispatch } from "react-redux";
import { subscribeTemperature } from "../redux/redux-slices/temperatureSlice";

export default function Temperature() {
  const dispatch = useDispatch();
  const temperature = useSelector(temperatureState);

  useEffect(() => {
    console.log(`temperature`, temperature);
  }, [temperature]);

  // useEffect(() => {
  //   dispatch(subscribeTemperature(790));
  // }, []);
  return <Container>{`temperature : ${temperature}`}</Container>;
}
