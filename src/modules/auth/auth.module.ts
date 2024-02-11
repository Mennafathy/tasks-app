import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/Components/login/login.component';
import { RegitserComponent } from 'src/Components/regitser/regitser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/Services/auth/auth.service';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [LoginComponent,RegitserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    AuthRoutingModule
  ],
  providers:[AuthService],
  exports:[LoginComponent,RegitserComponent]
})
export class AuthModule { }
