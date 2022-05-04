import { Component, OnInit } from '@angular/core';
//Service
import { TaskService } from 'src/app/services/task.service';
//Model
import { Task } from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //Create a value with the type Task (As for the model imported above)
  tasks: Task[] = [];

  constructor(
    //Calling the service so that the component knows it will use it 
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    //Getting the service response into a value 'tasks'
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

}
