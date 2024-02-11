import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDetails } from 'src/model/task-details';
import { Tasks } from 'src/model/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _httpClient: HttpClient) { }
  getAllToDos():Observable<any> {
    return this._httpClient.get('http://localhost:3000/todos')
  }
  addTask(task: TaskDetails):Observable<any> {
    return this._httpClient.post('http://localhost:3000/todos', task)
  }
  updateTask(id:number,task: Tasks):Observable<any> {
    return this._httpClient.put(`http://localhost:3000/todos/${id}`, task)
  }
  deleteTask(id: number):Observable<any> {
    return this._httpClient.delete(`http://localhost:3000/todos/${id}`)
  }
  getTaskDetails(id:string | null):Observable<any>{
    return this._httpClient.get(`http://localhost:3000/todos/${id}`)

  }
}
