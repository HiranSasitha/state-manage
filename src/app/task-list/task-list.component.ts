import { Component } from '@angular/core';
import { TaskDto } from '../dto/task-dto';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: Array<TaskDto>;

  constructor(private service: TaskService){
    this.taskList = service.getAllTasks();
  }
  trackById(index: number, task: any): number {
    return task.id;
  }
}
