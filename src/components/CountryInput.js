import React, { useState, useEffect } from "react";
import { getCountries } from "../utils/utils";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function CountryInput({ setCountry }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => getCountries(setCountries), []);

  const handleInputChange = (e) => {
    setCountry(e.target.innerText);
  };

  return (
    <>
      <Autocomplete
        id="country"
        options={countries}
        getOptionLabel={(option) => option}
        style={{ width: 300, marginRight: 10 }}
        onChange={handleInputChange}
        renderInput={(params) => (
          <TextField {...params} label="country" variant="outlined" />
        )}
      />
    </>
  );
}
