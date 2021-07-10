import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { subscribeTemperature } from "../redux/redux-slices/temperatureSlice";
import CityInput from "../components/CityInput";
import CountryInput from "../components/CountryInput";
import { getTemperature } from "../utils/utils";
import { Container, Button, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "94vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "4rem",
    alignItems: "center",
    backdropFilter: "blur(5px)",
  },
  typography: {
    fontWeight: "bold",
    fontSize: "clamp(3.5vh, 2.6vw, 15vw);",
    color: "black",
    textAlign: "center",
  },
  inputsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  },
  button: {
    padding: "clamp(12px, 5%, 15px);",
    fontWeight: "bold",
    boxShadow: "0px 5px 10px black",
    margin: "0px 5px 15px",
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
    <Container className={classes.root}>
      <Typography className={classes.typography}>
        Here you can find the current weather of all cities of the world
      </Typography>
      <Container className={classes.inputsContainer}>
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
