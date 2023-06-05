import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MenuEmocional() {
  const router = useRouter();
  const { id } = router.query;
  const [diario, setDiario] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/recordDE/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDiario(data);
      });
  }, [id]);

  const handleSubmit = () => {
    router.push(`/diario-emocional/${id}`)
  };

  return (
    <div
      className="h-screen bg-cover bg-repeat-y"
      style={{ backgroundImage: `url("/honeycombs.jpeg")` }}
    >
      <Header />
      <main className="m-5 grid gap-5">
        <h2 className="text-center text-xl font-bold">
          HISTORIAL DE REGISTRO EMOCIONAL
        </h2>
        <button
          className="bg-primary text-slate-950 font-bold rounded-xl py-2"
          type="button"
          onClick={handleSubmit}
        >
          Realizar registro diario emocional
        </button>
        <div>
          {diario.length > 0 ? (
            diario.map((item) => (
              <div key={item.id}>
                <p>Title: {item.title}</p>
                <p>Date: {item.fecha}</p>
                <p>Emotion: {item.emotion}</p>
                <p>Description: {item.description}</p>
                <button>Editar</button>
              </div>
            ))
          ) : (
            <h2 className="text-center text-xl font-bold">No hay registros aun...</h2>
          )}
        </div>
      </main>
    </div>
  );
}

export default MenuEmocional;
