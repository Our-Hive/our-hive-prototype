import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function DiarioOcasional() {
  const router = useRouter();
  const { id } = router.query;
  const [registroOcasional, setRegistroOcasional] = useState({
    title: "",
    description: "",
    emotion: "",
    fecha: "",
    userid: id,
  });

  const date = new Date();

  const handleRegister = (e) => {
    const { name, value } = e.target;
    setRegistroOcasional((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formatedDate = `${year}-${month}-${day}`;
    setRegistroOcasional((prevRegistro) => ({
      ...prevRegistro,
      fecha: formatedDate,
    }));
    const response = await fetch("http://localhost:3001/emotion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registroOcasional),
    });
    if (response.ok) {
      toast("🐝 Post Successful! 🍯", {
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
      router.push(`/menu-ocasional/${id}`);
    } else {
      toast("❌ Post Error! 🍯", {
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
    <div
      className="h-screen bg-cover bg-repeat"
      style={{ backgroundImage: `url("/honeycombs.jpeg")` }}
    >
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
        <h1 className="text-center text-xl font-bold mt-5">
          REGISTRO DIARIO OCASIONAL
        </h1>
        <form className="grid gap-5 mt-5">
          <label htmlFor="title">Title:</label>
          <input
            className="text-slate-900 rounded-xl py-2 text-center"
            type="text"
            name="title"
            placeholder="Your Title"
            value={registroOcasional.title}
            onChange={handleRegister}
          />
          <label htmlFor="title">Emotion:</label>
          <input
            className="text-slate-900 rounded-xl py-2 text-center"
            type="text"
            name="emotion"
            placeholder="Emotion That You Feel"
            value={registroOcasional.emotion}
            onChange={handleRegister}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            className="text-slate-900 rounded-xl py-2"
            type="text"
            placeholder="Tell Us About Your Feeling"
            name="description"
            value={registroOcasional.description}
            rows={10}
            onChange={handleRegister}
          ></textarea>
          <button
            className="bg-primary text-slate-950 font-bold rounded-xl py-2"
            type="button"
            onClick={handleSubmit}
          >
            Post
          </button>
        </form>
      </main>
    </div>
  );
}

export default DiarioOcasional;
