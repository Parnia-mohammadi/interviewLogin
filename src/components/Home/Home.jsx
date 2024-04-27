import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const[isRegister,setIsRegister] =useState(JSON.parse(localStorage.getItem("isRegister"))||false);
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
