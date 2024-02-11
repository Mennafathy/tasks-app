import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TasksService } from 'src/Services/tasks/tasks.service';
import { Tasks } from 'src/model/tasks';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  taskDetails!: Tasks
  taskId!:string | null
  _ToastrService=inject(ToastrService)
  constructor(private _ActivatedRoute:ActivatedRoute,private _TasksService: TasksService){
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>
    this.taskId=params.get('id')
    )
    this._TasksService.getTaskDetails(this.taskId).subscribe({
      next:(res)=>{
        this.taskDetails=res;      
      },
      error:(err)=>{
        this._ToastrService.error(err)
      }
    })
  }
}
