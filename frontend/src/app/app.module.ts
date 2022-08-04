import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
import { MatToolbarModule } from '@angular/material/toolbar'  
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    MatFormFieldModule, MatInputModule,
    MatToolbarModule,
    MatPaginatorModule, MatTableModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule, 
    MatInputModule, MatButtonModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
