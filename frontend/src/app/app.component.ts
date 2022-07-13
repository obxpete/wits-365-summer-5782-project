import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  messageData:object;
  constructor(private http: HttpClient) {

  }
  getMessage() {
    this.http.get<object>('/api').subscribe(data => {
      this.messageData = data;
  })  
  }
}
