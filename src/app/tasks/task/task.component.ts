import { Component, Input } from '@angular/core';

interface Tasks{
  id:string,
  userId:string,
  title:string,
  summary:string,
  dueDate:string
}
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) tasks!:Tasks;
}
