import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Avaliacao } from '../models/avaliacao'; // Verifique se o caminho ../models/avaliacao está correto
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AvaliacaoService {
  private apiUrl = 'http://localhost:8080/api/avaliacoes';

  constructor(private authService: AuthService) {}

  listarTodos(): Observable<Avaliacao[]> {
    return this.authService.get<Avaliacao[]>(this.apiUrl);
  }
}