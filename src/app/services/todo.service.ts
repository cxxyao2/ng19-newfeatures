import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    const page = 5;
    const size = 10;
    const query = 1;

    /* new way to create params
    const params = new HttpParams({
      fromObject: {
        query, page, size
      }
    });

     return this.http.get(this.apiUrl, { params });
*/

    return this.http.get(this.apiUrl);
  }

  createTodo(TodoData: { title: string; userId: number; completed: boolean }): Observable<any> {
    return this.http.post(this.apiUrl, TodoData);
  }

  updateTodo(id: number, TodoData: { title: string; userId: number }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, TodoData);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}