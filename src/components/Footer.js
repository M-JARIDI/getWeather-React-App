import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.root}>
        <span>
          Open source by{" "}
          <a href="https://github.com/M-JARIDI"> Mustapha Jaridi</a>
          <span> &copy; 2021</span>
        </span>
      </Typography>
    </Container>
  );
}
