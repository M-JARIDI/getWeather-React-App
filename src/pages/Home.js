import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { subscribeTemperature } from "../redux/redux-slices/temperatureSlice";
import { CountryDropdown } from "react-country-region-selector";
import CityInput from "../components/CityInput";

export default function Home() {
    const [country, setCountry] = useState("");
//   const dispatch = useDispatch();
//   const history = useHistory();

//   useEffect(() => {
//     dispatch(subscribeTemperature(250));
//     // history.push("/temperature");
//   });

  return (
    <Container>
      home
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
      {country !== "" && <CityInput country={country}/>}
    </Container>
  );
}
