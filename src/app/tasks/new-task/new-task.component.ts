import { Component, EventEmitter, Output, signal, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone : false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  @Input({required:true}) userId!:string; 
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService); // injecting a service using inject method

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle(),
      summary:this.enteredSummary(),
      date:this.enteredDueDate()
    },this.userId);
    
    this.close.emit();
  }
}
