import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoraService } from '../produtoras.service';
import { FilmeService } from '../filmes/filme.service';
import { BotoesTabelaComponent } from '../shared/botoes-tabela/botoes-tabela.component';

@Component({
  selector: 'app-produtoras',
  standalone: true,
  imports: [CommonModule, FormsModule, BotoesTabelaComponent],
  templateUrl: './produtoras.component.html',
  styleUrl: './produtoras.component.css'
})
export class ProdutorasComponent implements OnInit {
  produtorasOriginais: any[] = [];
  produtoras: any[] = [];
  filmes: any[] = [];
  filtroNome: string = '';

  constructor(
    private produtoraService: ProdutoraService,
    private filmeService: FilmeService
  ) {}

  ngOnInit(): void {
    this.carregarDados();
    this.produtoraService.listar().subscribe(data => {
  this.produtorasOriginais = data;
  this.produtoras = [...data];
  console.log('Dados carregados:', this.produtoras);});
  }

  carregarDados(): void {
    this.produtoraService.listar().subscribe(data => {
      this.produtorasOriginais = data;
      this.produtoras = data;
    });
    this.filmeService.listar().subscribe(data => this.filmes = data);
  }

  contarFilmes(produtoraId: string): number {
    if (!this.filmes) return 0;
    return this.filmes.filter(f => f.produtorasIds && f.produtorasIds.includes(produtoraId)).length;
  }

  filtrarProdutoras(): void {
    if (!this.filtroNome.trim()) {
      this.produtoras = this.produtorasOriginais;
      return;
    }
    const termo = this.filtroNome.toLowerCase();
    this.produtoras = this.produtorasOriginais.filter(p => p.nome.toLowerCase().includes(termo));
  }
}