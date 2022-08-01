import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  FormGroup,  Validators,  FormBuilder} from '@angular/forms';

// update imports here
import { MatTable, MatTableDataSource} from '@angular/material/table';
import { MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = ' My WITS 365 App';

  ELEMENT_DATA: task[] = [{
    'taskID': 0,
    'task': ''
  }]

  // MAT TABLE
  displayedColumns: string[] = ['taskID', 'task'];
  dataSource = new MatTableDataSource<task>(this.ELEMENT_DATA);
 

  taskForm : FormGroup;
  taskData:object[];
    
  
  constructor(private http: HttpClient,private formBuilder: FormBuilder) {
    //basic angular form
    this.taskForm = this.formBuilder.group({
      newTask: this.formBuilder.control(''),
    })
  }

  // ngOnInit runs when the component loads
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.http.get<[]>('http://localhost:8090/api/tasks').subscribe(data => {
      this.taskData = data;
      this.ELEMENT_DATA = data['recordset'].map(task => {return {taskID: task.taskID, task: task.task}})
      this.dataSource = new MatTableDataSource<task>(this.ELEMENT_DATA);
    })  
  }

  addTask() {
    this.taskData.push({task:this.taskForm.get('newTask').value});
    this.taskForm.get('newTask').reset()
  }

}


export interface task {
  taskID: number;
  task: string;
}