import { Component, Input } from '@angular/core';
import { Tasks } from './task.model';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) tasks!:Tasks;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.tasks.id);
  }

}
