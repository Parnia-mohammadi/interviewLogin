import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
