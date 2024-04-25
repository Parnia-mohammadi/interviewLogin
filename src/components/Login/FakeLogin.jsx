import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const fakeUser = {
  name: "parnia",
  pass: 1234,
};
function FakeLogin() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [auth, setAuth] = useState({
    authenicated: localStorage.getItem("authenicated") || false,
    error: "",
  });
  const [dataTodo, errTodo, loadingTodo] = useFetch(
    "https://jsonplaceholder.typicode.com",
    "todos"
  );
  // const [error, loginUser] = useRegister();
  const [data, errData, loading] = useFetch(
    "https://jsonplaceholder.typicode.com",
    "users"
  );
  const [selectedId, setSelectedId] = useState(1);
  const [selectedTodos, setSelectedTodos] = useState(
    dataTodo?.filter((todo) => todo.userId == selectedId)
  );
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
  useEffect(() => {
    setSelectedTodos(dataTodo?.filter((todo) => todo.userId == selectedId));
  }, [selectedId]);
  // console.log(data,errData,loading);
  // console.log(selectedTodos, selectedId);
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
            <button type="submit">FakeLogin</button>
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
          <select
            name="users"
            id="users"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            {data?.map((item) => {
              return (
                <option value={item.id} key={item.id} id={item.id}>
                  {item.id}_{item.name}
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
          selectedTodos?.map((todo) => {
            return (
              <div key={todo.id}>
                <label htmlFor={todo.id}>{todo.userId}_{todo.id-((todo.userId-1)*20)}:{todo.title}</label>
                <input
                  type="checkbox"
                  name={todo.id}
                  id={todo.id}
                  value={todo.title}
                  checked={todo.completed}
                  readOnly
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FakeLogin;
