import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useIsReg } from "../../context/IsRegProvider";
import { useState } from "react";

function Register() {
  const { isRegister, setIsRegister } = useIsReg();
  const [userName, setUserName] = useState("");
  const [userLName, setUserLName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      userLName,
      userPhone,
      password,
    };
    localStorage.setItem("isRegister",JSON.stringify(userData));
  };

  return (
    <Paper elevation={5} sx={{
        padding: 2,
        position: "absolute",top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"50%"
      }}>
      <Typography variant="h5" marginBottom={3}>Register form :</Typography>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        fullWidth={true}
        required={true}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          variant="outlined"
          label="Name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          type="text"
          value={userLName}
          onChange={(e) => setUserLName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Phone Number"
          type="tel"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </FormControl>
      </Paper>
  );
}

export default Register;
