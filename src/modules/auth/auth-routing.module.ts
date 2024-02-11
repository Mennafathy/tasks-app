import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/Components/login/login.component';
import { RegitserComponent } from 'src/Components/regitser/regitser.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'Login' },
  { path: 'Login', component: LoginComponent }
  , { path: 'Register', component: RegitserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
