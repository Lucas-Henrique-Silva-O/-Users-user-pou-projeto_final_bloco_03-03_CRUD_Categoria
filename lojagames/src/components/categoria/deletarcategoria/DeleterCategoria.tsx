import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WarningCircle, XCircle, Trash } from "@phosphor-icons/react";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      buscar(`/categoria/${id}`, setCategoria);
    }
  }, [id]);

  function confirmarExclusao() {
    if (id) {
      deletar(`/categoria/${id}`);
      navigate("/categorias");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <WarningCircle size={48} weight="bold" className="text-red-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Confirmar exclusão</h2>
        <p className="text-gray-700 mb-6">
          Tem certeza que deseja excluir a categoria{" "}
          <span className="font-semibold">{categoria?.nome}</span>?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/categorias")}
            className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
          >
            <XCircle size={20} weight="bold" /> Cancelar
          </button>
          <button
            onClick={confirmarExclusao}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            <Trash size={20} weight="bold" /> Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
