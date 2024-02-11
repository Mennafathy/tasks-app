import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth/auth.service';
import { SearchService } from 'src/Services/search/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchName!: string;
  isAuthorized!: boolean;

  constructor(private _SearchService: SearchService, private _AuthService: AuthService) {
  }
  ngOnInit(): void {
    this._AuthService.isAuthorized$.subscribe(authorized => {
      this.isAuthorized = authorized;
    });
  }

  onInputChange() {
    this._SearchService.setSearchName(this.searchName)
  }
}
