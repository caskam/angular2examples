import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './components/app/app.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [ AppComponent, PostsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
