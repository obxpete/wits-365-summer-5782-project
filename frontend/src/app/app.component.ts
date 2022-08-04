import { Component , OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  Validators,  FormBuilder} from '@angular/forms';
import { MatTable, MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select'

// update imports here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = ' My WITS 365 App';

  //paginator viewchild here
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ELEMENT_DATA: task[] = [{
    'taskID': 0,
    'task': ''
  }]

  // MAT TABLE
  displayedColumns: string[] = ['taskID', 'task'];
  dataSource = new MatTableDataSource<task>(this.ELEMENT_DATA);
 

  taskForm : FormGroup;
  taskUpdateForm : FormGroup;
  taskData:object[];
    
  constructor(private http: HttpClient,private formBuilder: FormBuilder) {
    //basic angular form
    this.taskForm = this.formBuilder.group({
      newTask: this.formBuilder.control(''),
    });

    this.taskUpdateForm = this.formBuilder.group({
      existingTaskID: this.formBuilder.control(0),
      existingTask: this.formBuilder.control(''),
    })

  }

  // ngOnInit runs when the component loads
  ngOnInit(): void {
    this.getTasks();
  }
  
  //ngAfterViewInit here
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getTasks() {
    this.http.get<[]>('http://localhost:8090/api/tasks').subscribe(data => {
      this.taskData = data;
      this.ELEMENT_DATA = data['recordset'].map(task => {return {taskID: task.taskID, task: task.task}})
      this.dataSource = new MatTableDataSource<task>(this.ELEMENT_DATA);
    })  
  }

  addNewTask() {
    // this.taskData.push({task:this.taskForm.get('newTask').value});
    this.http.post<any>('http://localhost:8090/api/add', {task:this.taskForm.get('newTask').value }).subscribe(data => {
      // insert getTasks() call to update our table
      this.getTasks();
    });
    
    this.taskForm.get('newTask').reset()
  }

  updateTask() {
    this.http.post<any>('http://localhost:8090/api/update', {taskID: this.taskUpdateForm.controls['existingTaskID'].value ,  task:this.taskUpdateForm.controls['existingTask'].value }).subscribe(data => {
     // insert getTasks() call to update our table
     this.getTasks();
     this.taskUpdateForm.reset()
   });
}


delete(taskID) {
  this.http.get<[]>(`http://localhost:8090/api/delete/${taskID}`).subscribe(data => {
    this.getTasks()
  })  
}
  
  
}


export interface task {
  taskID: number;
  task: string;
}
