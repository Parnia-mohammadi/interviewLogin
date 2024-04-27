import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Home from "./components/Home/Home";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
      </Route>
    </Routes>
  );
}

export default App;
