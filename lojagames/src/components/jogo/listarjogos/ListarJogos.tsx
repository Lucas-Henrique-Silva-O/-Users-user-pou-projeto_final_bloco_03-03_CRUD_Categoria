import { useEffect, useState } from "react";
import { listar } from "../../../services/Service";
import type Jogo from "../../../models/Jogo";

function ListaJogos() {
  const [jogos, setJogos] = useState<Jogo[]>([]);

  useEffect(() => {
    listar("/jogos", setJogos);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Lista de Jogos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {jogos.length === 0 ? (
          <p className="text-gray-600 col-span-full">Nenhum jogo encontrado.</p>
        ) : (
          jogos.map((jogo) => (
            <div
              key={jogo.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-2 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {jogo.nome}
              </h2>
              <p className="text-gray-600">Ano: {jogo.ano}</p>
              <p className="text-gray-600">
                Valor: R$ {jogo.valor.toFixed(2)}
              </p>
              <p className="text-sm text-purple-600 font-medium">
                Categoria: {jogo.categoria?.nome ?? "Sem categoria"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ListaJogos;
