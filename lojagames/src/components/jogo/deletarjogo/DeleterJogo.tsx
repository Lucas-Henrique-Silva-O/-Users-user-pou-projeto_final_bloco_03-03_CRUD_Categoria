import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WarningCircle, XCircle, Trash } from "@phosphor-icons/react";
import type Jogo from "../../../models/Jogo";
import { buscar, deletar } from "../../../services/Service";

function DeletarJogo() {
  const [jogo, setJogo] = useState<Jogo>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      buscar(`/jogo/${id}`, setJogo);
    }
  }, [id]);

  function confirmarExclusao() {
    if (id) {
      deletar(`/jogo/${id}`);
      navigate("/jogos");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <WarningCircle size={48} weight="bold" className="text-red-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Confirmar exclusão</h2>
        <p className="text-gray-700 mb-6">
          Tem certeza que deseja excluir o jogo{" "}
          <span className="font-semibold">{jogo?.nome}</span>?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/jogos")}
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

export default DeletarJogo;
