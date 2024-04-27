import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

function Register() {
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
        <Typography variant=""></Typography>
        <TextField variant="outlined" label="Name" type="text" />
        <TextField variant="outlined" label="Last Name" type="text" />
        <TextField variant="outlined" label="Phone Number" type="number" />
        <Select></Select>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </FormControl>
      <Paper elevation={3}></Paper>
    </Container>
  );
}

export default Register;
