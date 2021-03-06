import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  FormGroup,  Validators,  FormBuilder} from '@angular/forms';
import { MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  displayedColumns: string[] = ['taskID', 'task'];

  ELEMENT_DATA: task[] = [{
    'taskID': 0,
    'task': ''
  }]


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
  this.ELEMENT_DATA = [{taskID: 1, task: 'Hydrogen'}]

    this.http.get<[]>('http://localhost:8090/api/tasks').subscribe(data => {
      this.taskData = data;
      this.ELEMENT_DATA = data['recordset'].map(task => {return {taskID: task.taskID, task: task.task}})
      this.dataSource = new MatTableDataSource<task>(this.ELEMENT_DATA);
      console.log(this.ELEMENT_DATA)
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