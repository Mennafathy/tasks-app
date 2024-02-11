import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list.component';
import { TasksListRoutingModule } from './tasks-list-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/Pipes/search.pipe';
import { ProgressComponent } from 'src/Components/progress/progress.component';
import { DoneComponent } from 'src/Components/done/done.component';
import { TodoComponent } from 'src/Components/todo/todo.component';



@NgModule({
  declarations: [TasksListComponent,TodoComponent,ProgressComponent,DoneComponent,SearchPipe],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    TasksListRoutingModule,
  ],
  exports: [TasksListComponent] 
})
export class TasksListModule { }
