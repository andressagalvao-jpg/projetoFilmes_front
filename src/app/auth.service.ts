import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  // Método GET genérico
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
     
  // Método POST genérico
  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data);
  }

 delete(url: string): Observable<any> {
  
  return this.http.delete(url);}
}