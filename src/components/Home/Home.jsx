import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>welcome to Home page :</h1>
      <h2>please login to buy a car !</h2>
      <Button variant="contained">
        <NavLink to="/login">Login</NavLink>
      </Button>
    </div>
  );
}

export default Home;
