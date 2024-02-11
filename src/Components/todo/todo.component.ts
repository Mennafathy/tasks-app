import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from 'src/model/tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() tasksList: Tasks[] = []
  @Input() searchName: string = ''
  @Output() editTaskEvent = new EventEmitter<any>();
  @Output() deleteTaskEvent = new EventEmitter<number>();

  editTask(task:Tasks) {
    this.editTaskEvent.emit(task)
  }
  deleteTodoTask(taskId:number) {
    this.deleteTaskEvent.emit(taskId)
  }
}
