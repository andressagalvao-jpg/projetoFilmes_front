import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiUrl = 'http://localhost:8080/api/filmes'; 

  constructor(private authService: AuthService) {}

  listar(): Observable<any[]> {
    return this.authService.get(this.apiUrl);
  }

  obterPorId(id: string): Observable<any> {
    return this.authService.get(`${this.apiUrl}/${id}`);
  }

  salvar(filme: any): Observable<any> {
    return this.authService.post(this.apiUrl, filme);
  }

  excluir(id: string): Observable<any> {
    return this.authService.delete(`${this.apiUrl}/${id}`);
  }
}