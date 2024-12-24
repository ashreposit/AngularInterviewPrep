import { Component, Input,OnInit,inject } from '@angular/core';
import { Tasks } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  
  @Input({required:true}) tasks!:Tasks;

  ngOnInit(): void {
      console.log({INFO:this.tasks});
  }

  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.tasks.id);
  }

}
