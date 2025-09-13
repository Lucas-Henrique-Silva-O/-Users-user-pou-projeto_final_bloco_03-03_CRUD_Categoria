// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:4000", // backend NestJS
// });

// // GET - Buscar todos
// export async function listar(url: string, setDados: Function) {
//   const resposta = await api.get(url);
//   setDados(resposta.data);
// }

// // GET - Buscar por ID
// export async function listarPorId(url: string, setDados: Function) {
//   const resposta = await api.get(url);
//   setDados(resposta.data);
// }

// // POST - Cadastrar
// export async function cadastrar(url: string, dados: any, navigate: Function) {
//   try {
//     await api.post(url, dados);
//     // Redireciona corretamente para a listagem no FRONTEND
//     if (url.includes("categorias")) {
//       navigate("/categorias");
//     } else if (url.includes("jogos")) {
//       navigate("/jogos");
//     }
//   } catch (error) {
//     console.error("Erro ao cadastrar:", error);
//   }
// }

// // PUT - Atualizar
// export async function atualizar(url: string, dados: any, navigate: Function) {
//   try {
//     await api.put(url, dados);
//     // Redireciona corretamente para a listagem no FRONTEND
//     if (url.includes("categorias")) {
//       navigate("/categorias");
//     } else if (url.includes("jogos")) {
//       navigate("/jogos");
//     }
//   } catch (error) {
//     console.error("Erro ao atualizar:", error);
//   }
// }

// // DELETE - Excluir
// export async function deletar(url: string) {
//   await api.delete(url);
// }

// // Buscar um recurso pelo ID
// export async function buscar<T>(
//   url: string,
//   setDado: (dado: T) => void
// ): Promise<void> {
//   try {
//     const resposta = await api.get<T>(url);
//     setDado(resposta.data);
//   } catch (erro) {
//     console.error("Erro ao buscar:", erro);
//   }
// }

// export default api;


/// ccccccccccccc

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:4000", // backend NestJS
// });

// // GET - Buscar todos
// export async function listar<T>(url: string, setDados: (dados: T) => void) {
//   const resposta = await api.get<T>(url);
//   setDados(resposta.data);
// }

// // GET - Buscar por ID
// export async function listarPorId<T>(url: string, setDados: (dados: T) => void) {
//   const resposta = await api.get<T>(url);
//   setDados(resposta.data);
// }

// // POST - Cadastrar
// export async function cadastrar<T>(url: string, dados: T) {
//   return await api.post(url, dados);
// }

// // PUT - Atualizar
//  export async function atualizar<T>(url: string, dados: T) {
//    return await api.put(url, dados);
//  }

// // DELETE - Excluir
// export async function deletar(url: string) {
//   return await api.delete(url);
// }

// // GET - Buscar e setar estado
// export async function buscar<T>(url: string, setDado: (dado: T) => void) {
//   try {
//     const resposta = await api.get<T>(url);
//     setDado(resposta.data);
//   } catch (erro) {
//     console.error("Erro ao buscar:", erro);
//   }
// }

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // backend NestJS
});

// GET - Buscar todos
export async function listar<T>(url: string, setDados: (dados: T) => void) {
  const resposta = await api.get<T>(url);
  setDados(resposta.data);
}

// GET - Buscar por ID
export async function listarPorId<T>(url: string, setDados: (dados: T) => void) {
  const resposta = await api.get<T>(url);
  setDados(resposta.data);
}

// POST - Cadastrar
export async function cadastrar<T>(url: string, dados: T) {
  try {
    const resposta = await api.post(url, dados);
    return resposta.data;
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    throw error;
  }
}

// PUT - Atualizar
export async function atualizar<T>(url: string, dados: T) {
  try {
    const resposta = await api.put(url, dados);
    return resposta.data;
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    throw error;
  }
}

// DELETE - Excluir
export async function deletar(url: string) {
  try {
    const resposta = await api.delete(url);
    return resposta.data;
  } catch (error) {
    console.error("Erro ao deletar:", error);
    throw error;
  }
}

// GET - Buscar e setar estado
export async function buscar<T>(url: string, setDado: (dado: T) => void) {
  try {
    const resposta = await api.get<T>(url);
    setDado(resposta.data);
  } catch (erro) {
    console.error("Erro ao buscar:", erro);
  }
}

export default api;

