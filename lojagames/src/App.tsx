import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaJogos from "./components/jogo/listarjogos/ListarJogos";
import FormJogo from "./components/jogo/formjogo/FormJogo";
import ListaCategorias from "./components/categoria/listarcategorias/ListaCategorias";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Home />} />

          {/* Rotas de JOGOS */}
          <Route path="/jogos" element={<ListaJogos />} />
          <Route path="/jogos/form" element={<FormJogo />} />
          <Route path="/jogos/form/:id" element={<FormJogo />} />

          {/* Rotas de CATEGORIAS */}
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/categorias/form" element={<FormCategoria />} />
          <Route path="/categorias/form/:id" element={<FormCategoria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
