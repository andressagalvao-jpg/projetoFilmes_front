import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private apiUrl = 'http://localhost:8080/api/generos';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obterPorId(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  adicionar(genero: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, genero);
  }

  editar(id: any, genero: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, genero);
  }

  excluir(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}