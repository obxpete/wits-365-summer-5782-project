import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  FormGroup,  Validators,  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
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
    this.http.get<[]>('/api').subscribe(data => {
      this.taskData = data;
    })  
  }


  addTask() {
    this.taskData.push({task:this.taskForm.get('newTask').value});
    this.taskForm.get('newTask').reset()
  }

}
