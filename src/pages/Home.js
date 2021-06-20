import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { subscribeTemperature } from "../redux/redux-slices/temperatureSlice";
import CityInput from "../components/CityInput";
import CountryInput from "../components/CountryInput";
import { getTemperature } from "../utils/utils";
import { Container, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(5px)",
  },
  button: {
    padding: "1rem",
    fontWeight: "bold",
    boxShadow: "0px 5px 10px black",
  },
});

export default function Home() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);

  const classes = useStyles();
  // const [loadingCountries, setLoadingCountries] = useState(false);
  // const [loadingCities, setLoadingCities] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClickButton = () => {
    temperature && dispatch(subscribeTemperature(temperature));
    history.push("/temperature");
  };

  useEffect(() => {
    city !== "" && getTemperature(city, setTemperature);
  }, [city]);

  return (
    <Container>
      {/* Here you can find the current weather of a choosen city */}
      <Container className={classes.root}>
        <CountryInput setCountry={setCountry} />
        <CityInput country={country} setCity={setCity} />
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon></SendIcon>}
          onClick={handleOnClickButton}
          className={classes.button}
        >
          Search
        </Button>
      </Container>
    </Container>
  );
}
