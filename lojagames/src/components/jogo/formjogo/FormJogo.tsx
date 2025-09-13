import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GameController, FloppyDisk, XCircle } from "@phosphor-icons/react";
import type Jogo from "../../../models/Jogo";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar, listar } from "../../../services/Service";

function FormJogo() {
  const [jogo, setJogo] = useState<Jogo>({
    id: 0,
    nome: "",
    ano: 0,
    valor: 0,
    categoria: null, // agora começa como null
  });

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    listar("/categorias", setCategorias);
    if (id) {
      buscar(`/jogos/${id}`, setJogo);
    }
  }, [id]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const parsed = name === "ano" || name === "valor" ? Number(value) : value;
    setJogo((prev) => ({ ...prev, [name]: parsed as any }));
  }

  function handleCategoriaChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedId = Number(e.target.value);
    const categoriaSelecionada = categorias.find((c) => c.id === selectedId) || null;
    setJogo((prev) => ({
      ...prev,
      categoria: categoriaSelecionada,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id) {
      atualizar("/jogos", jogo, navigate);
    } else {
      cadastrar("/jogos", jogo, navigate);
    }
    navigate("/jogos");
  }

  const selectedCategoriaId: number | "" = jogo.categoria ? jogo.categoria.id : "";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-600">
          <GameController size={26} weight="bold" />
          {id ? "Editar Jogo" : "Cadastrar Jogo"}
        </h2>

        <input
          type="text"
          name="nome"
          value={jogo.nome}
          onChange={handleChange}
          placeholder="Nome do jogo"
          className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="number"
          name="ano"
          value={jogo.ano}
          onChange={handleChange}
          placeholder="Ano de lançamento"
          className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="number"
          step="0.01"
          name="valor"
          value={jogo.valor}
          onChange={handleChange}
          placeholder="Valor do jogo"
          className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-purple-500"
          required
        />

        <select
          onChange={handleCategoriaChange}
          value={selectedCategoriaId}
          className="w-full border rounded-lg p-3 mb-6 focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Selecione uma categoria</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nome}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/jogos")}
            className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
          >
            <XCircle size={20} weight="bold" /> Cancelar
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <FloppyDisk size={20} weight="bold" /> Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormJogo;
