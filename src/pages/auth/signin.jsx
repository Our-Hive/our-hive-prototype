import { useState } from "react";
import Header from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import User from "@/services/User";

function Signin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const router = useRouter();

  const saveUser = async () => {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    //console.log(responseData.id)
    if(response.ok){
      const responseData = await response.json()
      toast("🐝 User Log In! 🍯", {
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
      router.push(`/profile/${responseData.id}`)
    }else{
      toast("❌ Authentication Error! 🍯", {
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
    }

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
        <h2 className="text-center text-xl font-bold">Log In</h2>
        <form className="grid gap-5">
          <label htmlFor="email">Email:</label>
          <input
            className="text-slate-900 rounded-xl py-2 text-center"
            type="text"
            placeholder="Your Email"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
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
}
export default Signin;
