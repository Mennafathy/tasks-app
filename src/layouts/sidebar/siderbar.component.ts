import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  isSidebarOpen = true
  _AuthService = inject(AuthService)
  isAuthorized!: boolean
  constructor(private router: Router) { }
  ngOnInit(): void {
    this._AuthService.isAuthorized$.subscribe(authorized => {
      this.isAuthorized = authorized;
    });
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  logOut() {
    localStorage.removeItem('signUpUsers')
    this._AuthService.isAuthorizedSubject.next(false)
    this.router.navigate(['/Login'])
  }
}

