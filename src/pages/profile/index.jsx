import Image from "next/image";
import Header from "../../components/Header";
import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    avatar: "",
  });

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API LOGIC LEFT
  };

  return (
    <>
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
              onPaste={(e) => e.target.value = ""}
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
}
export default Profile;
