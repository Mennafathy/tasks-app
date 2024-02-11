import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SideBarComponent } from 'src/layouts/sidebar/siderbar.component';
import { NavbarComponent } from 'src/layouts/navbar/navbar.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { TasksListModule } from 'src/modules/tasks-list/tasks-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/Pipes/search.pipe';
import { SearchService } from 'src/Services/search/search.service';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { CommonModule } from '@angular/common';
import { TaskDetailsComponent } from 'src/Components/task-details/task-details.component';
import { AuthModule } from 'src/modules/auth/auth.module';
import { NotFoundComponent } from 'src/Components/not-found/not-found.component';

@NgModule({
  declarations: [
    SideBarComponent,
    NavbarComponent,
    TaskDetailsComponent,
    NotFoundComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    ButtonsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    TasksListModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [BsModalService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}