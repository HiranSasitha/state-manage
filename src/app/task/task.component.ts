import { Component, Input } from '@angular/core';
import { TaskDto } from '../dto/task-dto';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input()
  task!: TaskDto;

  constructor(private service: TaskService){

  }

  onTaskDelete(task: TaskDto){
      this.service.deleteTask(task);
  }
}
