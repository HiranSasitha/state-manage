import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { TaskDto } from '../dto/task-dto';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  constructor(private service: TaskService){
    // this.service = service;
  }

  onSubmit(txtElm: HTMLInputElement){
    const description = txtElm.value.trim();
    if (!description) {
      txtElm.focus();
      txtElm.select();
      return;
    }

    this.service.addTask(
      new TaskDto(this.service.getAllTasks().length,
                  description));
    txtElm.value = '';
    txtElm.focus();
  }
}
