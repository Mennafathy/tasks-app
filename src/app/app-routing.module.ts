import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/Components/login/login.component';
import { NotFoundComponent } from 'src/Components/not-found/not-found.component';
import { TaskDetailsComponent } from 'src/Components/task-details/task-details.component';
import { AuthGuard } from 'src/guards/auth.guard';

const routes: Routes = [
  {
    path: 'tasks',
    canActivate: [AuthGuard],
    loadChildren: () => import('../modules/tasks-list/tasks-list.module').then(m => m.TasksListModule)
  },
  {
    path: "tasksdetails/:id", canActivate: [AuthGuard], component: TaskDetailsComponent
  },
  {
    path: "dashboard", canActivate: [AuthGuard], loadChildren: () => import('../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "projects", canActivate: [AuthGuard], loadChildren: () => import('../modules/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: "calendar", canActivate: [AuthGuard], loadChildren: () => import('../modules/calendar/calendar.module').then(m => m.CalendarModule)
  }
  ,
  { path: "**", canActivate: [AuthGuard], component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
