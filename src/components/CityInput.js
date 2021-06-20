import React, { useState, useEffect } from "react";
import { getCities } from "../utils/utils";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  childs: {
    boxShadow: "0px 5px 10px black",
  },
});

export default function CityInput({ country, setCity }) {
  const [cities, setCities] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    country && getCities(country, setCities);
  }, [country]);

  const handleInputChange = (e) => {
    setCity(e.target.innerText);
  };

  return (
    <>
      <Autocomplete
        id="city"
        options={cities}
        getOptionLabel={(option) => option}
        style={{ width: 300, marginRight: 10 }}
        onChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="city"
            variant="outlined"
            className={classes.childs}
          />
        )}
      />
    </>
  );
}
