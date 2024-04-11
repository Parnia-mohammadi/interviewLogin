import { useEffect, useState } from "react";
import axios from "axios";

export default function useRegister() {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
    auth_token: "",
  });
  const [error, setError] = useState("");
  useEffect(() => {
    async function registerUser() {
      try {
        const data = await axios.post(
          "https://node-fake-api-server.herokuapp.com/",
          {
            headers: {
              "Content-Type": "application/json",
              "X-FakeAPI-Action": "register",
            },
            body: {
              external_id: "postman",
            },
          }
        );
        console.log("data", data);
        // setLoginUser(""data);
      } catch (err) {
        console.log("err", err);
        // setError(err);
      }
    }
    registerUser();
  }, []);
  return [error, loginUser];
}
