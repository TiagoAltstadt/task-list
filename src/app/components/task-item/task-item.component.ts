import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Icons
import { faTimes } from '@fortawesome/free-solid-svg-icons';
//Database
import { TASKS } from '../mock-tasks';
//Model
import { Task } from '../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(taskItem: Task) {
    this.onDeleteTask.emit(taskItem);
  }
  onToggle(taskItem: Task) {
    this.onToggleReminder.emit(taskItem);
  }

}
