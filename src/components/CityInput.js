import React, { useState, useEffect } from "react";
import { getCities } from "../utils/utils";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function CityInput({ country, setCity }) {
  const [cities, setCities] = useState([]);

  useEffect(() => getCities(country, setCities), []);

  const handleInputChange = (e) => {
    setCity(cities[e.target.getAttribute("data-option-index")]);
  };

  return (
    <>
      {cities.length > 0 && (
        <Autocomplete
          id="city"
          options={cities}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          onChange={handleInputChange}
          renderInput={(params) => (
            <TextField {...params} label="city" variant="outlined" />
          )}
        />
      )}
    </>
  );
}
