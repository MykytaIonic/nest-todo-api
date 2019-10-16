import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private httpClient: HttpClient) { }

  getTodos() {
    return this.httpClient.get('http://localhost:3000/todos');
  }
}
