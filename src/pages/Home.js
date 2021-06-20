import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { subscribeTemperature } from "../redux/redux-slices/temperatureSlice";
import CityInput from "../components/CityInput";
import CountryInput from "../components/CountryInput";
import { getTemperature } from "../utils/utils";
import { Container, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

export default function Home() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClickButton = () => {
    temperature && dispatch(subscribeTemperature(temperature));
    history.push("/temperature");
  };

  useEffect(() => {
    city !== "" && getTemperature(city, setTemperature);
  }, [city]);

  // useEffect(() => {
  //   temperature && dispatch(subscribeTemperature(temperature)); /*&&*/
  //   // history.push("/temperature");
  // }, [temperature, dispatch, history]);

  return (
    <Container className="container">
      <CountryInput setCountry={setCountry} />
      <CityInput country={country} setCity={setCity} />
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon></SendIcon>}
        onClick={handleOnClickButton}
      >
        Search
      </Button>
    </Container>
  );
}
