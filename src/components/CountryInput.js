import React, { useState, useEffect } from "react";
import { getCountries } from "../utils/utils";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  childs: {
    boxShadow: "0px 5px 10px black",
    minWidth: 250,
  },
});

export default function CountryInput({ setCountry }) {
  const [countries, setCountries] = useState([]);

  const classes = useStyles();

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
        style={{ margin: "0px 5px 15px" }}
        onChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="country"
            variant="outlined"
            className={classes.childs}
          />
        )}
      />
    </>
  );
}
