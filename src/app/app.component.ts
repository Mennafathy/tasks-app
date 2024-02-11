import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/Services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasks-app';
  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef, private _AuthService: AuthService) {
    translate.addLangs(['en', 'ar'])
    translate.setDefaultLang('en');
  }


}
