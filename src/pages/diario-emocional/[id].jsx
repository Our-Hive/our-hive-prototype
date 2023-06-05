import Header from "@/components/Header";
import { useState } from "react";

function DiarioEmocional() {
  const [registroDiario, setRegistroDiario] = useState({
    title: "",
    description: "",
    emotion: "",
    fecha: "",
    userId: "",
  });

  const date = new Date();

  const handleRegister = (e) => {
    const { name, value } = e.target;
    setRegistroDiario((prevRegistro) => ({ ...prevRegistro, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formatedDate = `${year}-${month}-${day}`;
    setRegistroDiario((prevRegistro) => ({
      ...prevRegistro,
      fecha: formatedDate,
    }));
    // TODO: Send to database
  };

  return (
    <div className="h-screen bg-cover bg-repeat" style={{backgroundImage: `url("/honeycombs.jpeg")`}}>
      <Header />
      <main className="m-5">
        <h1 className="text-center text-xl font-bold mt-5">
          REGISTRO DIARIO EMOCIONAL
        </h1>
        <form className="grid gap-5 mt-5">
          <label htmlFor="title">Title:</label>
          <input
            className="text-slate-900 rounded-xl py-2 text-center"
            type="text"
            name="title"
            placeholder="Your Title"
            value={registroDiario.title}
            onChange={handleRegister}
          />
          <label htmlFor="title">Emotion:</label>
          <input
            className="text-slate-900 rounded-xl py-2 text-center"
            type="text"
            name="emotion"
            placeholder="Emotion That You Feel"
            value={registroDiario.emotion}
            onChange={handleRegister}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            className="text-slate-900 rounded-xl py-2"
            type="text"
            placeholder="Tell Us About Your Feeling"
            name="description"
            value={registroDiario.description}
            rows={10}
            onChange={handleRegister}
          ></textarea>
          <button
            className="bg-primary text-slate-950 font-bold rounded-xl py-2"
            type="button"
          >
            Post
          </button>
        </form>
      </main>
    </div>
  );
}

export default DiarioEmocional;
