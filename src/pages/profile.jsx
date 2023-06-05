import Header from "../components/Header";
import { useState, useEffect } from "react";

// * services
import User from "../services/User";
export default profile = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  useEffect(() => {
    const userTemp = new User();
    // todo: get userName from local storage
    console.log(userTemp.getUser(userTemp.getUserNameLocalStorage()));
    const username = userTemp.getUserNameLocalStorage();
    console.log("140 " + username);
    setUser(userTemp.getUser(username));
  }, []);

  return (
    <>
      <Header />
      {user ? (
        <main className="m-5">
          <h2 className="text-center text-xl font-bold">User`s Details</h2>
          <form className="grid gap-5">
            <label htmlFor="username">Username:</label>
            <input
              className="text-slate-900 rounded-xl py-2 text-center"
              type="text"
              id="username"
              placeholder="Your Username"
              value={user.username}
            />
            <label htmlFor="password">Password:</label>
            <input
              className="text-slate-900 rounded-xl py-2 text-center"
              type="password"
              id="password"
              placeholder="Your Password"
              value={user.password}
            />
            <label htmlFor="email">Email:</label>
            <input
              className="text-slate-900 rounded-xl py-2 text-center"
              type="email"
              id="email"
              placeholder="Your Email"
              value={user.email}
            />
            <button
              className="bg-primary text-slate-950 font-bold rounded-xl py-2"
              type="button"
            >
              Save
            </button>
          </form>
        </main>
      ) : (
        <h2 className="text-center text-xl font-bold my-5">Loading...</h2>
      )}
    </>
  );
};
