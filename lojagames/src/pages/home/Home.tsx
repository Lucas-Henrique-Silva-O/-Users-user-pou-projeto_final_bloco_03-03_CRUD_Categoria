import { Link } from "react-router-dom";
import { House, Tag, GameController } from "@phosphor-icons/react";
import logo from "../../assets/maxresdefault.jpg";
import logo2 from "../../assets/7o17sd5yq5p51.jpg"
import logo3 from "../../assets/101352_front.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2 text-blue-700">
        <House size={28} weight="fill" /> Bem-vindo à Loja Games
      </h1>
      <div>
        <img src={logo} alt="DC COMICS" className="w-10 h-10 object-contain"/>
      </div>
      <div>
        <h3>
          Novos jogos em breve
          <img src={logo2} alt="Heroes" className="w-10 h-10 object-contain"/>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full px-6">
        {/* Card Categorias */}
        <Link
          to="/categorias"
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition transform"
        >
          <Tag size={48} weight="bold" className="text-blue-600 mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Categorias</h2>
          <p className="text-gray-600 text-center mt-2">
            Gerencie as categorias de jogos disponíveis.
          </p>
        </Link>

        {/* Card Jogos */}
        <Link
          to="/jogos"
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition transform"
        >
          <GameController size={48} weight="bold" className="text-purple-600 mb-3" />
          <h2 className="text-xl font-semibold text-gray-800">Jogos</h2>
          <p className="text-gray-600 text-center mt-2">
            Visualize e gerencie os jogos cadastrados.
          </p>
        </Link>
      </div>

      <div>
        <div>
        <h3>
          Jogos em promoção
          <img src={logo3} alt="Heroes" className="w-10 h-10 object-contain"/>
        </h3>
      </div>
      </div>
    </div>
  );
}

export default Home;
