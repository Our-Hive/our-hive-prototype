import { useState } from "react";
import Header from "../components/Header";
import User from "../services/User";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter()
  const [user, setUser] = useState({ username: "", password: "", email: "" });

  const saveUser = () => {
    const userTemp = new User(user.username, user.password, user.email);
    userTemp.deleteUserNameLocalStorage();
    userTemp.saveDB();
    userTemp.saveUserNameLocalStorage(user.username);
    router.push("/profile")
  };
  return (
    <>
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
export default Signup;