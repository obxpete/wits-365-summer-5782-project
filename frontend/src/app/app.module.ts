import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
import { MatToolbarModule } from '@angular/material/toolbar'  

// update imports here
import { MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    MatTableModule, MatToolbarModule, 
    // and here
    MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


        