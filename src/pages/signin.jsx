import { useState } from "react";
import Header from "../components/Header";
import User from "../services/User";

export default signin = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const saveUser = () => {
    const userTemp = new User();
    userTemp.deleteUserNameLocalStorage();
    userTemp.saveUserNameLocalStorage(user.username);
  };

  return (
    <>
      <Header />
      <main className="m-5">
        <h2 className="text-center text-xl font-bold">Log In</h2>
        <form className="grid gap-5">
          <label htmlFor="username">Username:</label>
          <input
            className="text-slate-900 rounded-xl py-2 text-center"
            type="text"
            placeholder="Your Username"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          <label htmlFor="password">Password:</label>
          <input
            className="text-slate-900 rounded-xl py-2 text-center"
            type="password"
            placeholder="Your Password"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <button
            className="bg-primary text-slate-950 font-bold rounded-xl py-2"
            type="button"
            onClick={saveUser}
          >
            Sign In
          </button>
        </form>
      </main>
    </>
  );
};
