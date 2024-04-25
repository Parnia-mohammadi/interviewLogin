import { Image, Label } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function Login() {
  return (
    <Container
      fixed
      variant="outlined"
      sx={{
        border: 1,
        borderColor: "red",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        fullWidth="true"
        required="true"
        component="form"
      >
        <h1>Register :</h1>
        <TextField variant="outlined" label="Name :" type="text" />
        <TextField variant="outlined" label="Last Name :" type="text" />
        <TextField variant="outlined" label="Phone Number :" type="number" />
        <Select></Select>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </FormControl>
      <Paper elevation={1}>
        
      </Paper>
    </Container>
  );
}

export default Login;
