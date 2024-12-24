import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

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

  tasks=[
    {
      id:'t1',
      userId:'u1',
      title:'Master Angular',
      summary:'Learn all the basic and advanced features of Angular',
      dueDate:'2025-12-31'
    },
    {
      id:'t2',
      userId:'u2',
      title:'Master Angular',
      summary:'Learn all the basic and advanced features of Angular',
      dueDate:'2025-12-31'
    }
  ];
  
  get selectedUserId(){
    return this.tasks.filter((task)=> task.userId === this.userId);
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task)=> task.id !== id );
  }

  onAddTask(){
    this.onAddingTask = true;
  }

  onCancelAddTask(){
    this.onAddingTask = false;  
  }
}
