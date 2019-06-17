import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { ApiResponse } from "./api.response";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/';
  
  /**
   * Metoda służąca do logowania
   * @param  {} loginPayload parametry do logowania
   * @returns Observable odpowiedź API
   */
  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }
  
  /**
   * Metoda pobierająca uzytkownika
   * @returns Observable odpowiedź API
   */
  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }
  
  /**
   * Metoda pobierajaca id użytkownika
   * @param  {number} id id użytkownika
   * @returns Observable odpowiedź API
   */
  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  /**
   * Metoda tworząca użytkownika
   * @param  {User} user dane użytkownika
   * @returns Observable odpowiedź API
   */
  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }
  
  /**
   * Metoda aktualizująca informacje o użytkownika
   * @param  {User} user dane użytkownika
   * @returns Observable odpowiedź API
   */
  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }
  
  /**
   * Metoda usuwająca użytkownika
   * @param  {number} id id użytkownika
   * @returns Observable odpowiedź API
   */
  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
