import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function CityInput({ country }) {
  const [cities, setCities] = useState([]);
  const URL = "https://countriesnow.space/api/v0.1/countries/cities";

  const getCities = async () => {
    await axios
      .post({
        url: URL,
        data: { country },
      })
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  };

  useEffect(() => getCities(), []);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={cities}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
    />
  );
}
