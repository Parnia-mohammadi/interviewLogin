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
        const  data  = await axios.post(
          "https://node-fake-api-server.herokuapp.com/",
          {
            username: "7b1b5334-090b-4814-b3ed-9b8add09d8b8",
            password: "64acfa78-bf31-445f-8427-838bbb121dd2",
            auth_token: "N2IxYjUzMzQtMDkwYi00ODE0LWIzZWQtOWI4YWRkMDlkOGI4OjY0YWNmYTc4LWJmMzEtNDQ1Zi04NDI3LTgzOGJiYjEyMWRkMg==",
          },
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
        console.log("data",data);
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
