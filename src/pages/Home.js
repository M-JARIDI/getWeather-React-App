import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { subscribeTemperature } from "../redux/redux-slices/temperatureSlice";
import CityInput from "../components/CityInput";
import CountryInput from "../components/CountryInput";
import { getTemperature } from "../utils/utils";
import { Container, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
// import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },
// });

export default function Home() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);

  // const classes = useStyles();
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
