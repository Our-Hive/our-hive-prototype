import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MenuEmocional() {
  const router = useRouter();
  const { id } = router.query;
  const [diario, setDiario] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/users/${id}/registers`)
      .then((response) => response.json())
      .then((data) => setDiario(data));
  }, [id]);

  const handleSubmit = () => {
    router.push(`/diario-emocional/${id}`);
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
        <section className="grid gap-5">
          {diario.length > 0 ? (
            diario.map((item) => (
              <article
                key={item.id}
                className="bg-yellow-500 rounded-lg p-4 shadow-md"
              >
                <p className="text-xl font-bold text-black">
                  Title: {item.title}
                </p>
                <p className="text-sm text-gray-600">Date: {item.fecha}</p>
                <p className="text-lg">Emotion: {item.emotion}</p>
                <p className="text-base">Description: {item.description}</p>
                <button className="bg-yellow-700 text-white py-2 px-4 rounded-md mt-4">
                  Editar
                </button>
              </article>
            ))
          ) : (
            <h2 className="text-center text-xl font-bold">
              No hay registros aun...
            </h2>
          )}
        </section>
      </main>
    </div>
  );
}

export default MenuEmocional;
