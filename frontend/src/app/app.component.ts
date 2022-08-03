import { Component , OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  Validators,  FormBuilder} from '@angular/forms';
import { MatTable, MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
   // initialize taskUpdate form here
  taskData:object[];
    
  constructor(private http: HttpClient,private formBuilder: FormBuilder) {
    //basic angular form
    this.taskForm = this.formBuilder.group({
      newTask: this.formBuilder.control(''),
    });

    //Insert updateTask form here

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
  
  // add updateTask function here



}


export interface task {
  taskID: number;
  task: string;
}
