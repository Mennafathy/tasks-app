import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorizedSubject = new BehaviorSubject<boolean>(false);
  isAuthorized$ = this.isAuthorizedSubject.asObservable();

  constructor() {
    this.initializeAuthorization();
  }
  private initializeAuthorization() {
    const localStorageValue = localStorage.getItem('signUpUsers');
    if (localStorageValue === null) {
      this.isAuthorizedSubject.next(false);
    } else {
      this.isAuthorizedSubject.next(!!localStorageValue);
    }

    if (!this.isAuthorizedSubject.getValue()) {
      this.isAuthorized$.subscribe(authorized => {
        this.isAuthorizedSubject.next(authorized);
      });
    }
  }
}
