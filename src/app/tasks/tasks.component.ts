import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;

  onAddingTask:boolean = false;

  constructor(private taskService: TasksService){}//injecting a service as a instance of TasksService
  
  get selectedUserTask(){
    console.log(this.userId);
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.onAddingTask = true;
  }

  onCloseAddTask(){
    this.onAddingTask = false;  
  }

}
