import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoneService {

  constructor(private _httoClient:HttpClient) { }
  getAllDone():Observable<any>
  {
    return this._httoClient.get('http://localhost:3000/done')
  }
}
