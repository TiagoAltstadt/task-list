import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "My Thingy";

  tasks: Task[] = TASKS;


  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {

  }

}
