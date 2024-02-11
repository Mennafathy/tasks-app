import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
   searchNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
   searchName$ = this.searchNameSubject.asObservable();

  constructor() { }
  setSearchName(name: string) {
    this.searchNameSubject.next(name);
  }

  getSearchName() {
    return this.searchName$;
  }
}
