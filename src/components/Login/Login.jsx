import { useState } from "react";

const fakeUser = {
  name: "parnia",
  pass: 1234,
};
function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [auth, setAuth] = useState({ authenicated: false, error: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == fakeUser.name && pass == fakeUser.pass) {
      setAuth((prevAuth) => ({ ...prevAuth, authenicated: true}));
      console.log(auth.authenicated);
    } else {
      setAuth((prevAuth) => ({
        ...prevAuth,
        error: "name or password is wrong.",
      }));
    }
  };
  return (
    <div>
      <form onSubmite={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="pass">Password : </label>
        <input
          type="password"
          name="pass"
          id="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {auth.authenicated ? (
          <div>
            <p>{fakeUser.name} have logged in</p>
            <button type="submit">"Logout"</button>
          </div>
        ) : (
          <div>
            <p>{auth.error}</p>
            <button type="submit">Login</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
