import { Link } from "react-router-dom";
import { GameController, Tag, PlusCircle } from "@phosphor-icons/react";

function Navbar() {
  return (
    <nav className="bg-purple-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <GameController size={28} weight="bold" />
          GameStore
        </Link>

        {/* Links de navegação */}
        <div className="flex gap-6">
          <Link
            to="/jogos"
            className="flex items-center gap-1 hover:text-gray-200 transition"
          >
            <GameController size={22} weight="bold" />
            Jogos
          </Link>
          <Link
            to="/categorias"
            className="flex items-center gap-1 hover:text-gray-200 transition"
          >
            <Tag size={22} weight="bold" />
            Categorias
          </Link>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-3">
          <Link
            to="/jogos/form"
            className="flex items-center gap-2 bg-green-600 px-3 py-1.5 rounded-lg hover:bg-green-700 transition"
          >
            <PlusCircle size={20} weight="bold" />
            Jogo
          </Link>
          <Link
            to="/categorias/form"
            className="flex items-center gap-2 bg-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-700 transition"
          >
            <PlusCircle size={20} weight="bold" />
            Categoria
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
