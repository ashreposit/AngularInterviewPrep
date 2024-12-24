import { Component, EventEmitter, Output, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit(){
    this.addTask.emit({
      title:this.enteredTitle(),
      summary:this.enteredSummary(),
      date:this.enteredDueDate()
    })
  }
}
