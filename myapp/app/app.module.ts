import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MyComponent } from './my-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MyComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
