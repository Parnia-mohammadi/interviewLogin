import { useEffect, useState } from "react";
import useRegister from "../../hooks/useRegister";
import useFetch from "../../hooks/useFetch";

const fakeUser = {
  name: "parnia",
  pass: 1234,
};
function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [auth, setAuth] = useState({
    authenicated: localStorage.getItem("authenicated") || false,
    error: "",
  });
  const [selectedId, setSelectedId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth.authenicated) {
      if (name == fakeUser.name && pass == fakeUser.pass) {
        localStorage.setItem("authenicated", !auth.authenicated);
        setAuth((prevAuth) => ({
          ...prevAuth,
          authenicated: !auth.authenicated,
        }));
        // console.log(auth.authenicated);
        setName("");
        setPass("");
      } else {
        setAuth((prevAuth) => ({
          ...prevAuth,
          error: "name or password is wrong.",
        }));
      }
    } else {
      const isAuth = auth.authenicated;
      localStorage.setItem("authenicated", !isAuth);
      setAuth((prevAuth) => ({ ...prevAuth, authenicated: !isAuth }));
    }
  };
  const [dataTodo, errTodo, loadingTodo] = useFetch(
    "https://jsonplaceholder.typicode.com",
    "todos"
  );
  // const [error, loginUser] = useRegister();
  const [data, errData, loading] = useFetch(
    "https://jsonplaceholder.typicode.com",
    "users"
  );
  const handleClick = (id) => {
    setSelectedId(dataTodo.filter((todo)=>todo.userId==id));
  }
  // console.log(data,errData,loading);
  console.log(dataTodo?.filter((todo)=>todo.id==2));
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            <button type="submit">Logout</button>
          </div>
        ) : (
          <div>
            <p>{auth.error}</p>
            <button type="submit">Login</button>
          </div>
        )}
      </form>
      {/* <div>
         <p>login user:{loginUser}</p>
         <p>error:{error}</p>
      </div> */}
      <div>
        <h1>Users :</h1>
        {loading ? (
          <p>loading...</p>
        ) : (
          <select name="users" id="users">
            {data?.map((item) => {
              return (
                <option
                  value={item.name}
                  key={item.id}
                  onClick={() => handleClick(id)}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <div>
        {loadingTodo ? (
          <p>loading todos...</p>
        ) : (
          selectedId?.map((todo)=>{
            return(<div key={todo.id}>
              <input type="checkbox" name={todo.title} id={todo.id} checked={todo.completed}/>
            </div>)}
          )
        )}
      </div>
    </div>
  );
}

export default Login;
