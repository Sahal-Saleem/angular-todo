import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.apiUrl

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
   return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask( task : Task) : Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }

  updateTaskReminder( task : Task ){
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task, httpOptions)
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
