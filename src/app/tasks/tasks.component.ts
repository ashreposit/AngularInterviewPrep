import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;

  onAddingTask:boolean = false;

  private taskService = new TasksService();
  
  get selectedUserTask(){
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    this.taskService.removeTask(id);
  }

  onStartAddTask(){
    this.onAddingTask = true;
  }

  onCancelAddTask(){
    this.onAddingTask = false;  
  }

  onAddTask(taskData:NewTaskData){
    this.taskService.addTask(taskData,this.userId);
    this.onAddingTask = false;
  }
}
