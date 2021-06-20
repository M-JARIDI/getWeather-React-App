import React, { useState, useEffect } from "react";
import { getCountries } from "../utils/utils";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function CountryInput({ setCountry }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => getCountries(setCountries), [countries]);

  const handleInputChange = (e) => {
    setCountry(countries[e.target.getAttribute("data-option-index")]);
  };

  return (
    <>
      <Autocomplete
        id="country"
        options={countries}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        onChange={handleInputChange}
        renderInput={(params) => (
          <TextField {...params} label="country" variant="outlined" />
        )}
      />
    </>
  );
}
