export interface Filme {
  id?: string;
  titulo: string;
  ano: number;
  orcamento: number;
  receita: number;
  runtime: number;
  linguagens: string[];
  status: string;
  diretorId: string;
  generosIds: string[];
}