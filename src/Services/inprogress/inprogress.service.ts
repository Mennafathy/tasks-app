import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InprogressService {

  constructor(private _httpClient:HttpClient) { }
  getAllInProgress():Observable<any>
  {
    return this._httpClient.get('http://localhost:3000/inprogress')
  }
}
