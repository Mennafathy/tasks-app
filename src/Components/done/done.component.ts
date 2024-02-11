import { Component, Input } from '@angular/core';
import { Tasks } from 'src/model/tasks';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent {
  @Input() doneList: Tasks[] = []

}
