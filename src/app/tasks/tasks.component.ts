import { Component, Input, Output,EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;

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
  ]
  
  get selectedUserId(){
    return this.tasks.filter((task)=> task.userId === this.userId);
  }
}
