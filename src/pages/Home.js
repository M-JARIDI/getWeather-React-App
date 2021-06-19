import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { subscribeTemperature } from "../redux/redux-slices/temperatureSlice";
import { CountryDropdown } from "react-country-region-selector";
import CityInput from "../components/CityInput";
import { getTemperature } from "../utils/utils";

export default function Home() {
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    city !== "" && getTemperature(city, setTemperature);
  }, [city]);

  useEffect(() => {
    temperature &&
      dispatch(subscribeTemperature(temperature)) &&
      history.push("/temperature");
  }, [temperature]);

  return (
    <Container>
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
      {country !== "" && <CityInput country={country} setCity={setCity} />}
      <p>{city}</p>
      {/* <p>{temperature}</p> */}
    </Container>
  );
}
