import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public task: string = '';
  public tasks = [
    {task: 'SCSS', check: false},
    {task: 'JavaScript', check: false},
    {task: 'JQuery', check: false},
    {task: 'Angular', check: false}
  ];
  @Input() countTasks: number = 0;
  @Output() changeValue = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
    this.countTasks = this.tasks.length;
  }

  getCount(count: number): void{
    this.countTasks = count;
  }

  createTask(task: string): void {
    if (typeof this.tasks !== undefined){       
      this.tasks.push({task: task, check: false});
      this.countTasks = this.tasks.length;
      this.changeValue.emit(this.countTasks);
    }
    this.task = '';    
  }
}
