import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent implements OnInit {
  filmes: any[] = [];
  filmesOriginais: any[] = [];
  filtroProdutora: string = '';
  filtroTitulo: string = '';
  filtroNota: number | null = null;
  filtroAno: number | null = null;
  filtroStatus: string = '';

  constructor(
    private filmeService: FilmeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.filmeService.listar().subscribe((data: any[]) => {
      this.filmesOriginais = data;
      this.filmes = [...data];
    });
  }

  filtrar(): void {
    this.filmes = this.filmesOriginais.filter(f => {
      const tituloComparacao = f.titulo || f.title || '';
      const atendeNome = !this.filtroTitulo.trim() || tituloComparacao.toLowerCase().includes(this.filtroTitulo.toLowerCase());
      
      const notaComparacao = f.vote_average || f.nota || 0;
      const atendeNota = !this.filtroNota || notaComparacao >= this.filtroNota;

      const atendeAno = !this.filtroAno || f.ano == this.filtroAno;

      const statusComparacao = f.status || '';
      const atendeStatus = !this.filtroStatus.trim() || statusComparacao.toLowerCase().includes(this.filtroStatus.toLowerCase());

      let atendeProdutora = true;
      if (this.filtroProdutora.trim()) {
        if (f.produtorasNomes && f.produtorasNomes.length > 0) {
          const textoProdutoras = f.produtorasNomes.join(' ').toLowerCase();
          atendeProdutora = textoProdutoras.includes(this.filtroProdutora.toLowerCase());
        } else {
          atendeProdutora = false;
        }
      }

      return atendeNome && atendeNota && atendeAno && atendeStatus && atendeProdutora;
    });
  }

  editar(id: string): void {
    this.router.navigate(['/filmes/editar', id]);
  }

  detalhes(id: string): void {
    this.router.navigate(['/filmes/detalhes', id]);
  }

  excluir(id: string): void {
    this.filmeService.excluir(id).subscribe(() => {
      this.carregarDados();
    });
  }
}