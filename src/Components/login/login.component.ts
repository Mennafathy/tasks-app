import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/Services/auth/auth.service';
import { Users } from 'src/model/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedUsers: Users[] = []
  loginForm!: FormGroup
  _fb = inject(FormBuilder)
  constructor(private _ToastrService: ToastrService, private router: Router, private _AuthService: AuthService) { }
  ngOnInit(): void {
    this.createForm()
    const usersLogged = localStorage.getItem('signUpUsers')
    if (usersLogged) {
      this.loggedUsers = JSON.parse(usersLogged)
    }

  }
  createForm() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  OnLoginSubmit(loginForm: FormGroup) {
    const isUserExist = this.loggedUsers.find(user => user.email === loginForm.value.email && user.password === loginForm.value.password);
    if (isUserExist) {
      this._ToastrService.success('Login Successully', "sucess", { positionClass: 'toast-top-center', timeOut: 2000 })
      this._AuthService.isAuthorizedSubject.next(true);
      this.router.navigate(['/tasks'])
    }
    else {
      this._AuthService.isAuthorizedSubject.next(false)
      this._ToastrService.error('Wrong Credintials', "error", { positionClass: 'toast-top-center', timeOut: 2000 })
    }
  }

}
