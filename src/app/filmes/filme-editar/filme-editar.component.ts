import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from '../filme.service'; // Verifique se o caminho está correto

@Component({
  selector: 'app-filme-editar',
  standalone: true,
  imports: [CommonModule, FormsModule], // Isso resolve os erros de ngModel e ngIf
  templateUrl: './filme-editar.component.html',
  styleUrl: './filme-editar.component.css'
})
export class FilmeEditarComponent implements OnInit {
  
  // Isso resolve o erro "Property 'filme' does not exist"
  filme: any = {
    id: '',
    titulo: '',
    ano: null,
    status: '',
    vote_average: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmeService: FilmeService
  ) {}

  ngOnInit(): void {
    // Pega o ID da URL para carregar os dados do filme
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.filmeService.obterPorId(id).subscribe((data) => {
        if (data) {
          this.filme = data;
        }
      });
    }
  }

  // Isso resolve o erro "Property 'salvar' does not exist"
  salvar(): void {
    this.filmeService.salvar(this.filme).subscribe(() => {
      alert('Filme salvo com sucesso!');
      this.voltar();
    });
  }

  // Isso resolve o erro "Property 'voltar' does not exist"
  voltar(): void {
    this.router.navigate(['/filmes']);
  }
}