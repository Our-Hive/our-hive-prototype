import Image from "next/image";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

function Profile() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    avatar: "",
  });
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    console.log(data);
    setUser({
      username: data.username,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
    });
  }, [id]);

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      toast("🐝 Update Successful! 🍯", {
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
    } else {
      toast("❌ An Error has ocurred try later! 🍯", {
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

  const handleDiary = (route) =>{
    router.push(`/${route}/${id}`)
  }

  return (
    <div className="h-screen bg-cover bg-repeat-y" style={{backgroundImage: `url("/honeycombs.jpeg")`}}>
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
      {user ? (
        <main className="m-5">
          <h2 className="text-center text-xl font-bold">User`s Details</h2>
          <figcaption className="flex justify-center">
            <Image
              className="rounded-xl"
              src={user.avatar}
              alt="User avatar"
              width={100}
              height={100}
            />
          </figcaption>
          <form className="grid gap-5">
            <label htmlFor="avatar">Avatar:</label>
            <input
              className="text-slate-900 rounded-xl py-2 text-center"
              type="text"
              id="avatar"
              placeholder="Image URL"
              name="avatar"
              value={user.avatar}
              onChange={handleUser}
              onPaste={(e) => (e.target.value = "")}
            />
            <label htmlFor="username">Username:</label>
            <input
              className="text-slate-900 rounded-xl py-2 text-center"
              type="text"
              id="username"
              placeholder="Your Username"
              name="username"
              value={user.username}
              onChange={handleUser}
            />
            <label htmlFor="password">Password:</label>
            <input
              className="text-slate-900 rounded-xl py-2 text-center"
              type="password"
              id="password"
              placeholder="Your Password"
              value={user.password}
              readOnly={true}
            />
            <label htmlFor="email">Email:</label>
            <input
              className="text-slate-900 rounded-xl py-2 text-center"
              type="email"
              id="email"
              placeholder="Your Email"
              name="email"
              value={user.email}
              onChange={handleUser}
            />
            <button
              className="bg-primary text-slate-950 font-bold rounded-xl py-2"
              type="button"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className="bg-primary text-slate-950 font-bold rounded-xl py-2"
              type="button"
              onClick={() => handleDiary("menu-emocional")}
            >
              Registro Diario
            </button>
            <button
              className="bg-primary text-slate-950 font-bold rounded-xl py-2"
              type="button"
              onClick={() => handleDiary("menu-ocasional")}
            >
              Registro Ocasional
            </button>
          </form>
        </main>
      ) : (
        <h2 className="text-center text-xl font-bold my-5">Loading...</h2>
      )}
    </div>
  );
}
export default Profile;
