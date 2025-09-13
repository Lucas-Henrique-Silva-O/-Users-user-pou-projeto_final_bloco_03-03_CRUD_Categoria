import type Categoria from "./Categoria";

export default interface Jogo {
    id: number;
    nome: string;
    ano: number;
    categoria?: Categoria | null;
    valor: number;
}
