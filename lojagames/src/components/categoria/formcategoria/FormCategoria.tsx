// import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Tag, FloppyDisk, XCircle } from "@phosphor-icons/react";
// import type Categoria from "../../../models/Categoria";
// import { atualizar, cadastrar, buscar } from "../../../services/Service";

// function FormCategoria() {
//   const [categoria, setCategoria] = useState<Categoria>({
//     id: 0,
//     nome: "",
//   });

//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       buscar(`/categorias/${id}`, setCategoria);
//     }
//   }, [id]);

//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     setCategoria({ ...categoria, [e.target.name]: e.target.value });
//   }

//     function handleSubmit(e: FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         if (id) {
//             atualizar(`/categorias/`${id}`, categoria, navigate);
//         } else {
//             cadastrar("/categorias", categoria, navigate);
//         }
//    }



//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-600">
//           <Tag size={26} weight="bold" />
//           {id ? "Editar Categoria" : "Cadastrar Categoria"}
//         </h2>

//         <input
//           type="text"
//           name="nome"
//           value={categoria.nome}
//           onChange={handleChange}
//           placeholder="Nome da categoria"
//           className="w-full border rounded-lg p-3 mb-6 focus:ring-2 focus:ring-blue-500"
//           required
//         />

//         <div className="flex justify-end gap-4">
//           <button
//             type="button"
//             onClick={() => navigate("/categorias")}
//             className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
//           >
//             <XCircle size={20} weight="bold" /> Cancelar
//           </button>
//           <button
//             type="submit"
//             className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           >
//             <FloppyDisk size={20} weight="bold" /> Salvar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default FormCategoria;



//ďdddddddddddddddddddddd

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tag, FloppyDisk, XCircle } from "@phosphor-icons/react";
import type Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, buscar } from "../../../services/Service";

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarCategoria() {
      try {
        if (id) {
          await buscar(`/categorias/${id}`, setCategoria);
        }
      } catch (err) {
        console.error("Erro ao buscar categoria:", err);
      }
    }
    carregarCategoria();
  }, [id]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   try {
  //     if (id) {
  //       await atualizar(`/categorias/${id}`, categoria);
  //     } else {
  //       await cadastrar("/categorias", categoria);
  //     }
  //     navigate("/categorias"); // redireciona só aqui
  //   } catch (err) {
  //     console.error("Erro ao salvar categoria:", err);
  //   }
  // }
//   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//   e.preventDefault();
//   try {
//     if (id) {
//       // Atualizar precisa mandar o ID na rota
//       await atualizar(`/categorias/${id}`, categoria);
//     } else {
//       // Cadastrar não precisa de ID
//       await cadastrar("/categorias", categoria);
//     }
//     navigate("/categorias"); // volta pra listagem
//   } catch (err) {
//     console.error("Erro ao salvar categoria:", err);
//   }
// }
async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (id) {
    await atualizar("/categorias", categoria);
  } else {
    // Remove o id antes de cadastrar
    const novaCategoria = { nome: categoria.nome };
    await cadastrar("/categorias", novaCategoria);
  }
}



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-600">
          <Tag size={26} weight="bold" />
          {id ? "Editar Categoria" : "Cadastrar Categoria"}
        </h2>

        <input
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={handleChange}
          placeholder="Nome da categoria"
          className="w-full border rounded-lg p-3 mb-6 focus:ring-2 focus:ring-blue-500"
          required
        />

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/categorias")}
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

export default FormCategoria;

