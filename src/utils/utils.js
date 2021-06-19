import axios from "axios";
const API_KEY = process.env.REACT_APP_API_WEATHER_MAP_KEY;
const URL_CITIES = "https://countriesnow.space/api/v0.1/countries/cities";
const URL_TEMPERATURE = `https://api.openweathermap.org/data/2.5/weather?`;

export const getCities = async (country, setCities) => {
  await axios
    .post(URL_CITIES, { country })
    .then((response) => {
      setCities(response.data.data);
    })
    .catch((error) => {
      console.log(`error`, error);
    });
};

export const getTemperature = async (city, setTemperature) => {
  await axios
    .get(`${URL_TEMPERATURE}q=${city}&units=metric&appid=${API_KEY}`)
    .then((response) => {
      setTemperature(Math.round(response.data.main.temp));
    })
    .catch((error) => {
      console.log(`error`, error);
    });
};
