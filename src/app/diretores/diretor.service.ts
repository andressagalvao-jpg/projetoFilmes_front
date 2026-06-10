import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {
  private apiUrl = 'http://localhost:8080/api/diretores';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obterPorId(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  adicionar(diretor: any): Observable<any> {
    return this.http.post(
      this.apiUrl,
      diretor,
      { responseType: 'text' as 'json' }
    );
  }

  editar(id: any, diretor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, diretor);
  }

  excluir(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}