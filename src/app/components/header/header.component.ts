import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tasks: Task[] = TASKS;
  shown: boolean = false;

  title = "ToDo's:";

  constructor() { }

  ngOnInit(): void { }

  toggleAddTask() {
    this.shown = !this.shown;
  }

}
