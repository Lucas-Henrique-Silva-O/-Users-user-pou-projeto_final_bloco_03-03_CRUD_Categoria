import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tag, PlusCircle, PencilSimple, Trash } from "@phosphor-icons/react";
import type Categoria from "../../../models/Categoria";
import { listar, deletar } from "../../../services/Service";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    listar("/categorias", setCategorias);
  }, []);

  function handleDelete(id: number) {
    deletar(`/categorias/${id}`).then(() => listar("/categorias", setCategorias));
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-600">
          <Tag size={26} weight="bold" /> Categorias
        </h2>
        <button
          onClick={() => navigate("/categorias/form")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <PlusCircle size={20} weight="bold" /> Nova Categoria
        </button>
      </div>

      {categorias.length === 0 ? (
        <p className="text-gray-500">Nenhuma categoria cadastrada.</p>
      ) : (
        <ul className="grid gap-4">
          {categorias.map((cat) => (
            <li
              key={cat.id}
              className="flex justify-between items-center bg-white shadow-md rounded-xl p-4"
            >
              <span className="text-lg font-medium">{cat.nome}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/categorias/form/${cat.id}`)}
                  className="p-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white"
                >
                  <PencilSimple size={18} weight="bold" />
                </button>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                >
                  <Trash size={18} weight="bold" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaCategorias;
