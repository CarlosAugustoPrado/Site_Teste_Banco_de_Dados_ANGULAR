import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl='https://sheet.best/api/sheets/c9856e86-91b0-4991-8a7d-115a5bc57539';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor (private httpClient: HttpClient) { }

// Retorna a lista de usuários READ
getUsers (): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
}

// Salva usuário no banco de dados CREATE
postUser (user: User):Observable<User> {
  return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
} 

// Exclui o usuário do banco DELETE
deleteUser(id: number):Observable<User> {
  return this.httpClient.delete<User>(`${this.apiUrl}/id${id}`)
}

// Edita Usuário UPDATE
updateUser (id: string, user: User):Observable<User> {
  return this.httpClient.put<User>(`${this.apiUrl}/id${id}`, user, this.httpOptions);
}

// Lista usuário unico
getUser(id: string): Observable<User[]>{
  return this.httpClient.get<User[]>(`${this.apiUrl}/id${id}`) ;
}
}
