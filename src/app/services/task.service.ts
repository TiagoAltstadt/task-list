import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
//I use the property Observable because im calling the Database in a Async way, as i don't know how much its going to take to get a response
import { Observable, of } from 'rxjs';

//Database
import { TASKS } from '../components/mock-tasks';
import { Task } from '../components/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
