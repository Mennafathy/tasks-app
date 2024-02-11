import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from 'src/model/tasks';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tasks: Tasks[],searchKeyword: string): any {
    if (searchKeyword == undefined) {
      return tasks;
    }
    return tasks?.filter((task) => {            
      let result = task.todo.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase());
      return result;
    });
  }

}
