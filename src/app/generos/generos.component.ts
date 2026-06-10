import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeneroService } from './genero.service';
import { FilmeService } from '../filmes/filme.service';
import { BotoesTabelaComponent } from '../shared/botoes-tabela/botoes-tabela.component';

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [CommonModule, FormsModule, BotoesTabelaComponent],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent implements OnInit {
  generosOriginais: any[] = [];
  generos: any[] = [];
  filmes: any[] = [];
  filtroNome: string = '';

  constructor(
    private generoService: GeneroService,
    private filmeService: FilmeService
  ) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.generoService.listar().subscribe(data => {
      this.generosOriginais = data;
      this.generos = data;
    });
    this.filmeService.listar().subscribe(data => this.filmes = data);
  }

  contarFilmes(generoId: string): number {
    if (!this.filmes) return 0;
    return this.filmes.filter(f => f.generosIds && f.generosIds.includes(generoId)).length;
  }

  filtrarGeneros(): void {
    if (!this.filtroNome.trim()) {
      this.generos = this.generosOriginais;
      return;
    }
    const termo = this.filtroNome.toLowerCase();
    this.generos = this.generosOriginais.filter(g => g.nome.toLowerCase().includes(termo));
  }
}