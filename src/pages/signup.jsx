import { useState } from "react";
import Header from "../components/Header";
import User from "../services/User";
import { ToastContainer, toast } from "react-toastify";

export default signup = () => {
  const [user, setUser] = useState({ username: "", password: "", email: "" });

  const saveUser = () => {
    const userTemp = new User(user.username, user.password, user.email);
    userTemp.deleteUserNameLocalStorage();
    userTemp.saveDB();
    userTemp.saveUserNameLocalStorage(user.username);
    toast("🐝 Cuenta Creada! 🍯", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: true,
      theme: "light",
      delay: 1,
    });
  };
  return (
    <>
      <ToastContainer
        className="bg-amber-900 z-10 text-center font-bold fixed w-screen pt-4"
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <main className="m-5">
        <h2 className="text-center text-xl font-bold">Register</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            className="text-slate-900 rounded-xl py-2 text-center"
            type="email"
            placeholder="Your Email"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <button
            className="bg-primary text-slate-950 font-bold rounded-xl py-2"
            type="button"
            onClick={saveUser}
          >
            Sign Up
          </button>
        </form>
      </main>
    </>
  );
};
