import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DoneService } from 'src/Services/done/done.service';
import { InprogressService } from 'src/Services/inprogress/inprogress.service';
import { SearchService } from 'src/Services/search/search.service';
import { TasksService } from 'src/Services/tasks/tasks.service';
import { Tasks } from 'src/model/tasks';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit, OnDestroy {
  tasksList: Tasks[] = []
  inprogressList: Tasks[] = []
  doneList: Tasks[] = []
  tasksSubscription!: Subscription;
  inprogressSubscription!: Subscription;
  doneSubscription!: Subscription;
  @ViewChild('addModal') addModal!: TemplateRef<any>;
  @ViewChild('editModal') editModal!: TemplateRef<any>;

  modalRef!: BsModalRef;
  addTaskForm!: FormGroup
  editTaskForm!: FormGroup
  searchName!: string
  taskId!: number
  constructor(private _TasksService: TasksService, private _InprogressService: InprogressService, private _DoneService: DoneService,
    private _toastr: ToastrService, private modalService: BsModalService, private _fb: FormBuilder, private _SearchService: SearchService) {
    this._SearchService.searchName$.subscribe(name => {
      this.searchName = name;
    });

  }
  ngOnInit(): void {
    this.createForm()
    this.getAllTodos()
    this.getAllInProgress()
    this.getAllDone()
  }
  createForm() {
    this.addTaskForm = this._fb.group({
      todo: ['', Validators.required],
      completed: [false]
    }),
      this.editTaskForm = this._fb.group({
        todo: ['', Validators.required],
        completed: [false]
      })

  }

  getAllTodos() {
    this.tasksSubscription = this._TasksService.getAllToDos().subscribe((data: object) => {
      this.tasksList = data as Tasks[]
    }
    )
  }

  getAllInProgress() {
    this.inprogressSubscription = this._InprogressService.getAllInProgress().subscribe({
      next: (inprogressdaata: object) => {
        this.inprogressList = inprogressdaata as Tasks[]
      },
      error: (err) => this._toastr.error(err)
    }
    )
  }
  
  getAllDone() {
    this.doneSubscription = this._DoneService.getAllDone().subscribe({
      next: (doneData: object) => {
        this.doneList = doneData as Tasks[]
      },
      error: (err) => this._toastr.error(err)
    }
    )
  }
  openModal() {
    this.modalRef = this.modalService.show(this.addModal);
    this.addTaskForm.reset()
  }

  closeModal() {
    this.modalRef.hide();
  }

  openEditModal(task: any) {
    this.editTaskForm.patchValue({
      todo: task.todo,
      completed: task.completed
    });
    this.modalRef = this.modalService.show(this.editModal);
  }

  onAddFormSubmit() {
    const completedValue = this.addTaskForm.value.completed !== null ?
      this.addTaskForm.value.completed : false;
    if (this.addTaskForm.valid) {
      const taskData = {
        todo: this.addTaskForm.value.todo,
        completed: completedValue
      };
      this._TasksService.addTask(taskData).subscribe({
        next: (task) => {
          this._toastr.success(`${task.todo} Added Successfully `, "sucess", { positionClass: 'toast-top-center', timeOut: 2000 });
          this.getAllTodos()
          this.modalRef.hide()
        },
        error: (err) => this._toastr.error(`${err}`, "error", { positionClass: 'toast-top-center', timeOut: 2000 })
      })
    }
  }


  deleteTodoTask(id: number) {
    this._TasksService.deleteTask(id).subscribe({
      next: (task) => {
        this._toastr.success(`Task Deleted Successfully `, "sucess", { positionClass: 'toast-top-center', timeOut: 2000 });
        this.getAllTodos()
      },
      error: (err) => this._toastr.error(`${err}`, "error", { positionClass: 'toast-top-center', timeOut: 2000 })
    })
  }

  editTask(task: any) {
    this.taskId = task.id
    this.openEditModal(task)
  }

  onEditFormSubmit() {
    this._TasksService.updateTask(this.taskId, this.editTaskForm.value).subscribe({
      next: (task) => {
        this._toastr.success(`${task.todo} Updated Successfully `, "success", { positionClass: 'toast-top-center', timeOut: 2000 });
        this.getAllTodos()
        this.modalRef.hide()
      },
      error: (err) => this._toastr.error(`${err}`, "error", { positionClass: 'toast-top-center', timeOut: 2000 })
    });
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
    this.inprogressSubscription.unsubscribe();
    this.doneSubscription.unsubscribe();
  }
}
