import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/model/users';

@Component({
  selector: 'app-regitser',
  templateUrl: './regitser.component.html',
  styleUrls: ['./regitser.component.scss']
})
export class RegitserComponent implements OnInit {
  registerForm!: FormGroup
  signUpUsers: Users[] = []
  _fb = inject(FormBuilder)
  constructor(private router:Router,private _ToastrService:ToastrService){}
  ngOnInit(): void {
    this.createForm()
    const signUpData = localStorage.getItem('signUpUsers')
    if(signUpData)
    {
      this.signUpUsers=JSON.parse(signUpData)      
    }
  }
  createForm() {
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      email: ['',[ Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]],
      repassword: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^01[01215][0-9]{8}/)]],
    })
  }
  handleRegister(registerForm: FormGroup) {
    this.signUpUsers.push(registerForm.value)
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers))
    this.registerForm.reset()
    this._ToastrService.success('Registered Successully', "sucess", { positionClass: 'toast-top-center', timeOut: 2000 })
    this.router.navigate(['/Login']);
  }
}
