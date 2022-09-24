import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Output() countTasks = new EventEmitter<number>();
  @Input() inputTask!:string; 
  @Input() tasks: Array<{task:string, check: boolean}> = [];
  @Input() count: number = 0;

  public editStatus = false;
  public taskIndex: number = 0;
  public taskName: string = '';
  
  constructor() { }

  ngOnInit() {   
  }

  editTask(index: number):void {
    this.taskName = this.tasks[index].task;
    this.taskIndex = index;
    this.editStatus = true;

  }

  deleteTask(index: number):void {
    this.tasks.splice(index, 1);
    this.count = this.tasks.length;
    this.countTasks.emit(this.count);
  }

  saveTask(): void {
    this.tasks[this.taskIndex].task= this.taskName;
    this.editStatus = false;
    this.taskName = '';
  }
}
