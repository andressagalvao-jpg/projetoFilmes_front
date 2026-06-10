import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from '../../filmes/filme.service';

@Component({
  selector: 'app-filme-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './filme-detalhes.component.html',
  styleUrl: './filme-detalhes.component.css'
})
export class FilmeDetalhesComponent implements OnInit {
  filme: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmeService: FilmeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.filmeService.obterPorId(id).subscribe(data => {
        this.filme = data;
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/filmes']);
  }
}