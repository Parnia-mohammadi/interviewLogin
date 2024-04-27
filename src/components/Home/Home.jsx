import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useIsReg } from "../../context/IsRegProvider";

function Home() {
  const {isRegister} = useIsReg();
  return (
    <div>
      <h1>welcome to Home page :</h1>
      <h2>please login or register to buy a car !</h2>
      <Button variant="contained">
        <NavLink to={`${isRegister?"/login":"/register"}`}>
        {isRegister?"Login":"Register"}</NavLink>
      </Button>
    </div>
  );
}

export default Home;
