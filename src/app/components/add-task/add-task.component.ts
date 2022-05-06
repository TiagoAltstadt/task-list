import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string = "";
  reminder: boolean = false;
  id: number;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.text === undefined) {
      alert('Please add a task!');
      return
    }
    const { id, text, day, reminder } = this
    const newTask = { id, text, day, reminder }
    this.onAddTask.emit(newTask)
  }
}
