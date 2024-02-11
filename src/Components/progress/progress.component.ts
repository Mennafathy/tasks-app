import { Component, Input } from '@angular/core';
import { Tasks } from 'src/model/tasks';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() inprogressList: Tasks[] = []
}
