import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Status } from '../models/status'; // Verifique se o caminho ../models/status está correto
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StatusService {
  private apiUrl = 'http://localhost:8080/api/status';

  constructor(private authService: AuthService) {}

  listarTodos(): Observable<Status[]> {
    return this.authService.get<Status[]>(this.apiUrl);
  }
}