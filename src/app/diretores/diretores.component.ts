import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoraService } from '../produtoras.service';
import { BotoesTabelaComponent } from '../shared/botoes-tabela/botoes-tabela.component';

@Component({
  selector: 'app-diretores',
  standalone: true,
  imports: [CommonModule, FormsModule, BotoesTabelaComponent],
  templateUrl: './diretores.component.html',
  styleUrl: './diretores.component.css'
})
export class DiretoresComponent implements OnInit {

  produtoras: any[] = [];
  produtorasOriginais: any[] = [];
  filtroNome: string = '';

  constructor(private produtoraService: ProdutoraService) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.produtoraService.listar().subscribe((data: any[]) => {
      this.produtorasOriginais = data;
      this.produtoras = [...data];
    });
  }

  filtrar(): void {

    if (!this.filtroNome.trim()) {
      this.produtoras = [...this.produtorasOriginais];
      return;
    }

    const termo = this.filtroNome.toLowerCase();

    this.produtoras = this.produtorasOriginais.filter(p =>
      (p.nome || '').toLowerCase().includes(termo)
    );
  }
}